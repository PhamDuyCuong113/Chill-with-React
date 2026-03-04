import PostCard from "./components/PostCard/PostCard";

export default function App() {
  const posts = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/100?img=1",
      username: "Anh yêu",
      time: "2 giờ trước",
      content: "Hôm nay học React thấy cuốn vãi 😎"
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/100?img=2",
      username: "Dev Pro",
      time: "1 giờ trước",
      content: "Composition đúng là chân ái 🔥"
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/100?img=3",
      username: "Frontend God",
      time: "30 phút trước",
      content: "Props là read-only nha anh em 👀"
    }
  ];

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      {posts.map(post => (
        <PostCard
          key={post.id}
          avatar={post.avatar}
          username={post.username}
          time={post.time}
          content={post.content}
        />
      ))}
    </div>
  );
}