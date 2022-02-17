import { useState, useEffect } from "react";

//!below thing is called custom hook and it must start with use

const useFetch = (url) => {
  //^ same reason as below ..not always we work with same link
  const [data, setData] = useState(null); //^ made "blogs" as "data" to make it relevent if we use any other time
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
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
    fetch(url) //change the end point in the server i.e after 8000/ for example put 8000/blogss server will recieve request but cant find the file because the endpoint doesnt exist
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      //   .then((response) => response.json()) // we get response from above line
      .then((data) => {
        //! this data is different from above line6 data ... this is local variable
        console.log(data); // data is just a dummy variable like i in loops
        setIsPending(false);
        setData(data);
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
  }, [url]); //this empty array(name is not there) is the second argument of useEffect and it makes useeffect run only once
  //*when ever url changes its gonna run again
  return { data, isPending, error };
};

export default useFetch;
