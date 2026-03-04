import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

export default function PostCard({ avatar, username, time, content }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "15px"
      }}
    >
      <PostHeader
        avatar={avatar}
        username={username}
        time={time}
      />
      <PostContent content={content} />
      <PostActions />
    </div>
  );
}