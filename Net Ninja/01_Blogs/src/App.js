import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import DoubleDropDown from "./Practise/DoubleDropDown";
import CheckBox from "./Practise/CheckBox";
import KLayout from "./components/KLayout";
import AsideBar from "./components/AsideBar";
import { useState } from "react";


const App = () => {

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <AsideBar />
          <Routes>
            {/* <Route path="/"  element={<Home />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route> */}

            {/* Practice Start */}

            {/* <Route path="/" element={<DoubleDropDown />} /> */}

            {/* <Route path="/" element={<CheckBox /> } /> */}
            <Route path="/" element={<KLayout />} />


            {/* Practice End */}

          </Routes>
      </Router>
    </>
  );
}

export default App;
