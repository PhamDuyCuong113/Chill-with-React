const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());


// ==========================
// DATA 
// ==========================
const BlogPosts = [
  {
    slug: "first-blog-post",
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    slug: "second-blog-post",
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
];


// ==========================
// API 1: GET ALL POSTS
// ==========================
app.get("/api/posts", (req, res) => {
  res.json(BlogPosts);
});


// ==========================
// API 2: GET POST DETAIL
// ==========================
app.get("/api/post/:slug", (req, res) => {
  const slug = req.params.slug;

  const post = BlogPosts.find(p => p.slug === slug);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});


// ==========================
// (OPTIONAL) BONUS API - ADD POST
// ==========================
app.post("/api/post", (req, res) => {
  const { slug, title, description } = req.body;

  const newPost = { slug, title, description };
  BlogPosts.push(newPost);

  res.status(200).json({
    message: "Post created successfully",
    data: newPost,
  });
});


// ==========================
// RUN SERVER
// ==========================
