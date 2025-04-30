import {useState} from 'react' 

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>button</button>
      {count}
    </div>
  );
}

export default App;
