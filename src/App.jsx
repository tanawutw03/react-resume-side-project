import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomPage";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h1 className="text-4xl text-black">Page Not Found.</h1>
      <br />
      <p className="text-2xl">
        <Link to="/">Back to homepage.</Link>
      </p>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
