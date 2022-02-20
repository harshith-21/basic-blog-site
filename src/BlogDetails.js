import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/` + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      History.push("/blogs");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.content}</div>
          <button onClick={handleClick}>DeLeTe</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
