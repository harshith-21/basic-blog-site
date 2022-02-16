import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  //   let name = "John";
  //   const [name, setName] = useState("mario"); //reactive state
  //   const [age, setAge] = useState(25);
  //
  //   const handleClick = (e) => {
  //     console.log("clicked", e); //e means the event
  //   };

  //   const handleClickAgain = (name, e) => {
  //     console.log("hello " + name, e); //e means the event
  //   };

  //   const handleClick = () => {
  //     if (name === "mario") {
  //       setName("luigi");
  //     } else {
  //       setName("mario");
  //     }
  //   };
  //   const handleAge = () => {
  //     setAge(age + 1);
  //   };
  //   const handleDAge = () => {
  //     setAge(age - 1);
  //   };

  const [blogs, setblogs] = useState([
    {
      title: "my new website",
      body: "lorem ipsum....",
      author: "me",
      id: 1,
      likes: 10,
    },
    {
      title: "welcome party",
      body: "lorem ipsum....",
      author: "that guy",
      id: 2,
      likes: 9,
    },
    {
      title: "web dev topm tips",
      body: "lorem ipsum....",
      author: "this guy",
      id: 3,
      likes: 7,
    },
  ]);

  return (
    <div className="home">
      {/* <h2>Homepage</h2> */}
      {/* <p>{name}</p>
      <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={(e) => handleClickAgain("John", e)}>
        Click me again
      </button> */}
      {/* <p>{age}</p>
      <button onClick={handleAge}>increase age</button>
      <button onClick={handleDAge}>decrease age</button> */}

      <Bloglist blogs={blogs} title="All Blogs!" />
    </div>
  );
};

export default Home;
