import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import useLoginUserAuto from "./hooks/useLoginUserAuto";

function App() {
  useLoginUserAuto();
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
