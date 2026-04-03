function Suggestions() {
  const users = ["design_hub", "code_master", "travel_with_me", "daily_photos"];

  return (
    <aside className="suggestions">
      <h3>Suggestions For You</h3>
      {users.map((user, index) => (
        <div key={index} className="suggestion-user">
          <div className="suggestion-left">
            <img
              src={`https://i.pravatar.cc/40?img=${index + 20}`}
              alt={user}
              className="profile-pic"
            />
            <span>{user}</span>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </aside>
  );
}

export default Suggestions;