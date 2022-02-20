// const Bloglist = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;

import { Link } from "react-router-dom";

//   console.log(props, blogs);
const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
