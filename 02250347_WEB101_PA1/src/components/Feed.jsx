import posts from "../data/posts";
import PostCard from "./PostCard";

function Feed() {
  return (
    <main className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Feed;