import { useState } from "react";

export default function PostActions() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Like ({likes})
    </button>
  );
}