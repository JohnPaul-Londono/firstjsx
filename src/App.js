
import './App.css';

function App() {

  const listStyle = {
    width:"15%",
    margin: "0px auto"
  }
  
  return (
    <div className="App">
        <h1>Hello Dojo!</h1>
        <h2>Things I Need To Do:</h2>
        <ul style = {listStyle}>
            <li>Eat</li>
            <li>Sleep</li>
            <li>Buy Pokemon Cards</li>
            <li>Buy More Cards</li>
        </ul>
    </div>
  );
}

export default App;
