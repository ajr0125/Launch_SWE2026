import './App.css'
import Card from './components/card.jsx'
import Counter from './components/counter.jsx'
import Button from '@mui/material/Button';


function App() {


  return (
    <>
        <div>
          <Button variant="contained">Contained</Button>
        </div>
        <br />
        <div>This is a webpage</div>
        <br />
        <div>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
        <div className='card-container'>
            <Card title="card 1" content="card 1 content"></Card>
            <Card title="card 1" content="card 1 content"></Card>
            <Card title="card 1" content="card 1 content"></Card>
            <Card title="card 1" content="card 1 content"></Card>
            <Card title="card 1" content="card 1 content"></Card>
        </div>
    </>
  )
}

export default App
