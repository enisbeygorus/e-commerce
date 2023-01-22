import "./App.css";
import { BrowserRouter as Router, ScrollRestoration } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./hooks/useScrollTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
