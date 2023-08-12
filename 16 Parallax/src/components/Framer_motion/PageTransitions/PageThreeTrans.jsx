import React from "react";
import "./page.css";
import { motion as m } from "framer-motion";
import { container, item, pItems, paragrapgContainer } from "./animate";

const PageThreeTrans = () => {
  return (
    <div id="PageThreeTrans" className="p-5 text-white ">
      <m.ul variants={container} initial="hidden" animate="show">
        <m.div className="obverflow-hidden">
          <m.li variants={item} className="display-4">
            HTML
          </m.li>
        </m.div>
        <m.div className="obverflow-hidden">
          <m.li variants={item} className="display-4">
            CSS
          </m.li>
        </m.div>
        <m.div className="obverflow-hidden">
          <m.li variants={item} className="display-4">
            JavaScript
          </m.li>
        </m.div>
        <m.div className="obverflow-hidden">
          <m.li variants={item} className="display-4">
            ReactJs
          </m.li>
        </m.div>
        <m.div className="obverflow-hidden">
          <m.li variants={item} className="display-4">
            Bootstrap
          </m.li>
        </m.div>
      </m.ul>
      <div>
        <m.div
          variants={paragrapgContainer}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <m.p variants={pItems} initial="hidden" show="show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            est ipsum facere aspernatur totam quasi similique provident
            repellendus veritatis ea architecto error debitis, deserunt tempora
            neque aperiam voluptatum labore sed facilis libero. Pariatur nihil
            facilis exercitationem illo voluptatum minus odit totam incidunt
            cumque rerum ullam ab necessitatibus, eum reprehenderit quidem!
          </m.p>
        </m.div>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <m.p variants={pItems} initial="hidden" show="show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            est ipsum facere aspernatur totam quasi similique provident
            repellendus veritatis ea architecto error debitis, deserunt tempora
            neque aperiam voluptatum labore sed facilis libero. Pariatur nihil
            facilis exercitationem illo voluptatum minus odit totam incidunt
            cumque rerum ullam ab necessitatibus, eum reprehenderit quidem!
          </m.p>
        </m.div>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="overflow-hidden"
        >
          <m.p variants={pItems} initial="hidden" show="show">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            est ipsum facere aspernatur totam quasi similique provident
            repellendus veritatis ea architecto error debitis, deserunt tempora
            neque aperiam voluptatum labore sed facilis libero. Pariatur nihil
            facilis exercitationem illo voluptatum minus odit totam incidunt
            cumque rerum ullam ab necessitatibus, eum reprehenderit quidem!
          </m.p>
        </m.div>
      </div>
    </div>
  );
};

export default PageThreeTrans;
