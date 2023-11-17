import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={ChatPage} />
    </div>
  );
}

export default App;
