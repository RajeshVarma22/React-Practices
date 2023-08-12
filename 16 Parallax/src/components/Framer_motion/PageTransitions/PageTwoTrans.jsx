import React from "react";
import "./page.css";
import { motion as m } from "framer-motion";

const PageTwoTrans = () => {
  return (
    <m.div
      id="PageTwoTrans1"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        id="PageTwoTrans2"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <m.div
          id="PageTwoTrans3"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <m.div
            id="PageTwoTrans"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.8 }}
          >
            <div className="overflow-hidden bg-danger w-50 ">
              <m.p
              className="m-1 p-3"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                suscipit amet tempore numquam quasi cum nisi, explicabo earum
                natus sunt tenetur totam enim omnis veritatis eveniet incidunt
                quod illo unde!
              </m.p>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                suscipit amet tempore numquam quasi cum nisi, explicabo earum
                natus sunt tenetur totam enim omnis veritatis eveniet incidunt
                quod illo unde!
              </p> */}
            </div>
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default PageTwoTrans;
