import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";

// Load .env variables
dotenv.config();

// Create Express app and define port #
const app = express();
const port = 5001;

// Cors allows the frontend and backend to talk to each other
app.use(cors());

// Automatically parse incoming JSON
app.use(bodyParser.json());

// Create OpenAI client object (connect to OpenAI)
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

// Server test
app.get("/hello-world", (req, res) => {
  res.json({ message: "Server is working" });
});

// POST endpoint - how we send messages to the server
app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({
      error: "Messages must be an array",
    });
  }

  try {
    console.log("Incoming messages:", messages);


    const messagesWithSystem = [
      { role: "system", content: "You are a helpful assistant." },
      ...messages, // Spread operator to take multiple messages at once
    ];

    // OpenAI API Call - send request to API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messagesWithSystem,
    });

    // Extract AI's response - just the first if there are multiple
    const aiMessage = response.choices[0].message;

    console.log("AI response:", aiMessage);

    res.status(200).json({
      role: aiMessage.role,
      content: aiMessage.content,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({
      error: "OpenAI API failed",
    });
  }
});

// Start backend server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});