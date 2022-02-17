// * If you select a block of code and use the key sequence Ctrl+K+C, you'll comment out the section of code. Ctrl+K+U will uncomment the code
// import { useState, useEffect } from "react";
import { Children } from "react/cjs/react.production.min";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

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

  //below thin is called state
  //   const [blogs, setblogs] = useState(  // ! in usefetch file
  //     null
  //     //     [
  //     //     {
  //     //       title: "my new website",
  //     //       body: "lorem ipsum....",
  //     //       author: "me",
  //     //       id: 1,
  //     //       likes: 10,
  //     //     },
  //     //     {
  //     //       title: "welcome party",
  //     //       body: "lorem ipsum....",
  //     //       author: "that guy",
  //     //       id: 2,
  //     //       likes: 9,
  //     //     },
  //     //     {
  //     //       title: "web dev topm tips",
  //     //       body: "lorem ipsum....",
  //     //       author: "this guy",
  //     //       id: 3,
  //     //       likes: 7,
  //     //     },
  //     //     {
  //     //       title: "welcome party-2",
  //     //       body: "lorem ipsum....",
  //     //       author: "me",
  //     //       id: 4,
  //     //       likes: 9,
  //     //     },
  //     //   ]
  //   );

  //   const [name, setName] = useState("mario");
  //   const [isPending, setIsPending] = useState(true); //!in use fetch file

  //   const handleDelete = (id) => {
  //     // setblogs((blogs) => blogs.filter((blog) => blog.id !== id)); //changes the original data,better not to use it
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setblogs(newBlogs);
  //   };

  //   const [error, setError] = useState(null); //!in use fetch file
  //& use effect fires on every state change

  // &anything in the array is observed for changes and if anythign changes it runs the useEffect
  //domt try to change state in useeffect if u do it goes on a loop because , u change something whenever there is change in render useeffect will run again and rendered again and goes on and on
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
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title="All Blogs!"
          //   handleDelete={handleDelete}
        />
      )}

      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "me")}
        title="My Blogs!"
      /> */}

      {/* <button onClick={() => setName("luigi")}>change name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;
