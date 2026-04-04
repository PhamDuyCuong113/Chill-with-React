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
      <h2>📚 Blog Posts</h2>
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
        <h1>🚀 Simple Blog App</h1>

        <nav>
          <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PostLists />} />
          <Route path="/posts" element={<PostLists />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;