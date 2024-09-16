import "./styles/main.scss";
import "./App.scss";
import SideNav from "./Components/side_Nav/SideNav.jsx";

function App() {
  return (
    <div className="app">
      <SideNav />
      <div className="content">{/* Phần nội dung chính */}</div>
    </div>
  );
}

export default App;
