import { useState } from "react";

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState(post.comments || []);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }

    setShowHeart(true);

    setTimeout(() => {
      setShowHeart(false);
    }, 800);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;

    setAllComments((prevComments) => [...prevComments, commentText]);
    setCommentText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="post-card fade-in">
      <div className="post-header">
        <div className="user-info">
          <img
            src={post.profilePic}
            alt={post.username}
            className="profile-pic"
          />
          <div>
            <h4>{post.username}</h4>
            <p>{post.location}</p>
          </div>
        </div>
        <span className="more-options">•••</span>
      </div>

      <div className="image-wrapper" onDoubleClick={handleDoubleClick}>
        <img
          src={post.postImage}
          alt={post.username}
          className="post-image"
        />
        {showHeart && <div className="big-heart">❤️</div>}
      </div>

      <div className="post-actions">
        <span
          onClick={handleLike}
          className={liked ? "action-icon liked" : "action-icon"}
        >
          {liked ? "❤️" : "🤍"}
        </span>

        <span className="action-icon">💬</span>
        <span className="action-icon">📤</span>

        <span
          onClick={() => setSaved(!saved)}
          className="action-icon save-icon"
        >
          {saved ? "🔖" : "📑"}
        </span>
      </div>

      <p className="likes">{likeCount} likes</p>

      <p className="caption">
        <strong>{post.username}</strong> {post.caption}
      </p>

      <div className="comments">
        {allComments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>

      <div className="comment-box">
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleCommentSubmit}>Post</button>
      </div>

      <p className="time">{post.time}</p>
    </div>
  );
}

export default PostCard;