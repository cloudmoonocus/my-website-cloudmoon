import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import Layout from "@theme/Layout";
import style from "./styles.module.css";
import { iconList, productIntro } from "@site/src/dict/project";

const MyProject: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onChangeProject = useCallback((i: number) => {
    requestAnimationFrame(() => {
      setIndex(i);
      containerRef.current!.style.transform = `translateY(-${i * 100}%)`;
    });
  }, []);

  return (
    <Layout noFooter>
      <div className={style.main}>
        <div ref={containerRef} style={{ transform: `translateY(-0%)`, transition: "transform .8s ease" }}>
          {productIntro.map((item) => {
            return (
              <div
                key={item.title}
                style={{
                  backgroundImage: `url(${item.bgi})`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <div className={style.iconImage}>
                    <img width="100" height="100" src={item.icon} alt={item.title} />
                  </div>
                  <h3 style={{ color: "#1c1e21" }}>{item.title}</h3>
                  <div style={{ color: "#1c1e21" }}>{item.text}</div>
                  <button className={style.goToPlay} onClick={() => window.open(item.link, "_blank")}>
                    前往体验 {item.disabled && <span style={{ color: "#021e4c" }}>(无法访问)</span>}
                  </button>
                </div>
                <div className={style.productImg}>
                  <img style={{ width: "calc(13rem + 25vw)" }} src={item.img} alt={item.title} />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {iconList.map((item, i) => {
            return (
              <div
                key={item.alt}
                onClick={() => onChangeProject(i)}
                className={classNames({
                  [`${style.isFocus}`]: index === i,
                })}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MyProject;
