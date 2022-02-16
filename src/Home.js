// * If you select a block of code and use the key sequence Ctrl+K+C, you'll comment out the section of code. Ctrl+K+U will uncomment the code
import { useState, useEffect } from "react";
import { Children } from "react/cjs/react.production.min";
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

  //below thin is called state
  const [blogs, setblogs] = useState(
    null
    //     [
    //     {
    //       title: "my new website",
    //       body: "lorem ipsum....",
    //       author: "me",
    //       id: 1,
    //       likes: 10,
    //     },
    //     {
    //       title: "welcome party",
    //       body: "lorem ipsum....",
    //       author: "that guy",
    //       id: 2,
    //       likes: 9,
    //     },
    //     {
    //       title: "web dev topm tips",
    //       body: "lorem ipsum....",
    //       author: "this guy",
    //       id: 3,
    //       likes: 7,
    //     },
    //     {
    //       title: "welcome party-2",
    //       body: "lorem ipsum....",
    //       author: "me",
    //       id: 4,
    //       likes: 9,
    //     },
    //   ]
  );

  const [name, setName] = useState("mario");
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    // setblogs((blogs) => blogs.filter((blog) => blog.id !== id)); //changes the original data,better not to use it
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setblogs(newBlogs);
  };

  const [error, setError] = useState(null);
  //& use effect fires on every state change
  useEffect(() => {
    // !below code makes data loading from json file 1000ms late jus to see the real life loading effect
    // setTimeout(() => {
    //   fetch("http://localhost:8000/blogs")
    //     .then((response) => response.json()) // we get response from above line
    //     .then((data) => {
    //       console.log(data); // data is just a dummy variable like i in loops
    //       setblogs(data);
    //       setIsPending(false);
    //     });
    // }, 1000);
    //! same as above without 1000ms waiting
    fetch("http://localhost:8000/blogs") //change the end point in the server i.e after 8000/ for example put 8000/blogss server will recieve request but cant find the file because the endpoint doesnt exist
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      //   .then((response) => response.json()) // we get response from above line
      .then((data) => {
        console.log(data); // data is just a dummy variable like i in loops
        setIsPending(false);
        setblogs(data);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      });
    //!checks whether fetched or not i.e connected to server or not... most probably connection error (wont catch errors from server like empty data or server error)

    // console.log("use effect run");
    // console.log(blogs);
    // console.log(name);
  }, []); //this empty array(name is not there) is the second argument of useEffect and it makes useeffect run only once
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
          handleDelete={handleDelete}
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
