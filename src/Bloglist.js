const Bloglist = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  console.log(props, blogs);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
