import FramerTesting from "./components/Framer_motion/First_framerMotion/FramerTesting";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParallaxMain from "./components/first_parallax/ParallaxMain";
import PageOne from "./components/Framer_motion/PageTransitions/PajeOne";
import PageTwoTrans from "./components/Framer_motion/PageTransitions/PageTwoTrans";
import PageThreeTrans from "./components/Framer_motion/PageTransitions/PageThreeTrans";
import { AnimatePresence } from "framer-motion";
import KaifLayout from "./components/Kaif Layout/KaifLayout";
import AddInput from "./components/Kaif Layout/AddInput";
import NameAnimation from "./components/Framer_motion/Name Animation/NameAnimation";
import PresentTemplates from "./components/ew/PresentTemplates";
import Single from "./components/ew/Single";
import { useState } from "react";

function App({}) {
  const [dataNum, seDataNum] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            
            <Route path="/" element={<KaifLayout />} />


            <Route path={"PageTransition 1"} element={<PresentTemplates seDataNum={seDataNum}/>} />
            <Route path={"single"} element={<Single  dataNum={dataNum}/>} />

          
            <Route path="add" element={<AddInput />} />
            

            {/* <Route path="/" element={<NameAnimation />} />

            <Route path={"firstParallax"} element={<ParallaxMain />} />

            <Route path={"FramerTesting"} element={<FramerTesting />} />

            <Route path={"PageTransition 1"} element={<PageOne />} />
            <Route path={"PageTransition 2"} element={<PageTwoTrans />} />
            <Route path={"PageTransition 3"} element={<PageThreeTrans />} /> */}
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
