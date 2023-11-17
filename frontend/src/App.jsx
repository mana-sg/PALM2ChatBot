import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
    </div>
  );
}

export default App;
