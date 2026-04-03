import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Feed />
        <Suggestions />
      </div>
    </div>
  );
}

export default App;