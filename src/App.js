import logo from "./logo.svg";
import "./App.css";

const ans = 'I am fine';
const users = { name: "jahid hasan", id: 787898 };

const userStyle = {
  color: 'purple',
  backgroundColor: 'red',
  margin: '3rem',
  padding: '3rem'
}

function App() {
  return (
    <div className="App">
      <h1>Hi friends how are you?</h1>
      <h1>ans: {ans}</h1>

      <div className="container">
        <h1 style={userStyle}>Name: {users.name}</h1>
        <h1 style={{background: 'purple',margin: '3rem',borderRadius: '1rem'}}>Id: {users.id}</h1>
      </div>
    </div>
  );
}

function CreateName() {
  return (
    <div>
      <h1>Name: {users.name}</h1>
      <h1>Id: {users.id}</h1>
    </div>
  );
}

export default App;
