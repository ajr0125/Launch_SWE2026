import { useEffect, useState } from "react";
import fetchAllPeople from "./utils/people";

function App() {
  // Store database data in react state
  const [people, setPeople] = useState([]);

  // Fetch database data when page first loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("ARJUN");
        const data = await fetchAllPeople();
        console.log(data);
        // Update state with retrieved data
        setPeople(data);
      } catch (error) {
        console.error("Failed to fetch people:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <p>
              <strong>First Name:</strong> {person.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {person.lastName}
            </p>
            <p>
              <strong>Age:</strong> {person.age}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
