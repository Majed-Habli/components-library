import "./styles/App.scss";
import Home from "./pages/home/Home";
import Layout from "layout";
import Components from "pages/components/components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
