import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


// ==========================
// COMPONENT: POST LIST
// ==========================
function PostLists() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(data => {
        alert("Tạo thành công!");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2> Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}


// ==========================
// COMPONENT: POST DETAIL
// ==========================
function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${slug}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [slug]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link to="/posts">⬅ Back</Link>
    </div>
  );
}


// ==========================
// MAIN APP
// ==========================
function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Simple Blog App</h1>

        <nav>
          <Link to="/posts">Posts</Link>
          <Link to="/create"> | Create Post</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PostLists />} />
          <Route path="/posts" element={<PostLists />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;