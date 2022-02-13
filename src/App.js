import "./App.css";

function App() {
  const title = "Hello World";
  var likes = 10;
  var person = { name: "John", age: 25 };
  var link = "https://www.facebook.com";
  return (
    <div className="App">
      <div className="content">
        <h1>app component</h1>
        {/* <h2>{title}</h2>
        <p>you have {likes} likes</p>
        <p>
          {person.name} is {person.age} years old
        </p>
        <p> {"hello there"} </p>
        <p>8639933234</p>
        <p>hello there</p>
        <p>{[1, 2, 3, 4, 5, 6, 7, 8]}</p>
        <p>this is a random number {Math.round(Math.random() * 10)}</p>
        <a href="http://www.google.com">google</a>
        <hr />
        <a href={link}>facebook</a> */}
      </div>
    </div>
  );
}

export default App;
