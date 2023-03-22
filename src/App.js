import logo from "./logo.svg";
import "./App.css";

const ans = 'I am fine';

const userStyle = {
  color: 'purple',
  backgroundColor: 'red',
  margin: '3rem',
  padding: '3rem'
}
// arry of object
const peoples = [
  { name: "jahid hasan", id: 787898, work: 'nothing'},
  { name: "foysal ahsan", id: 985099, work: 'something'},
  { name: "moaj khan", id: 648038, work: 'children'},
  { name: "samit", id: 317592, work: 'student'},
];

const nayoks = ['manna', 'anwar', 'jashim', 'rahamat', 'kabila']

function App() {
  return (
    <div className="App">
      <h1>Hi friends how are you?</h1>
      <h1>ans: {ans}</h1>

    {
      peoples.map(people => <Friends name={people.name} id={people.id} work={people.work}></Friends>)
    }

    {
      nayoks.map(nayok => <Users name={nayok}></Users>)
    }  
      
      <h2>Friends details</h2>
      <hr />
      <Friends name="Foysal" work="manager of ajaira compani" id="Id: 252575" student="student"></Friends>
      <Friends name="Robel" work="actor" id="3454" nayka="Naika: mousomi"></Friends>
    </div>
  );
}

function Users(props) {
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      {/* <h1>Id: {props.id}</h1> */}
    </div>
  );
}

function Friends(props) {
  console.log(props);
  return (
    <div className="friends">
      <h2>Name: {props.name}</h2>
      <h5>Work: {props.work}</h5>
      <h5>{props.nayka}</h5>
      <h3>{props.id}</h3>
      <h3>{props.student}</h3>

    </div>
  )
}


{/* <div className="container">
        <h1 style={userStyle}>Name: {users.name}</h1>
        <h1 style={{background: 'purple',margin: '3rem',borderRadius: '1rem'}}>Id: {users.id}</h1>
      </div> */}


export default App;
