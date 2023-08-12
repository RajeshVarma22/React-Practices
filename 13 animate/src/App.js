import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Sidebar />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
