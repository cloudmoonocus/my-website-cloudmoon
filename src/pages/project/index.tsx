import React, { useState } from "react";
import { iconList, productIntro } from "./constant";
import classNames from "classnames";
import Layout from "@theme/Layout";
import style from "./styles.module.css";

const MyProject: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [position, setPosition] = useState<string>("-0%");

  const changeProduct = (i: number) => {
    setPosition(`-${i * 100}%`);
    setIndex(i);
  };

  return (
    <Layout
      noFooter
      description="Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长"
    >
      <div className={style.main}>
        <div style={{ transform: `translateY(${position})` }}>
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
                onClick={() => changeProduct(i)}
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
