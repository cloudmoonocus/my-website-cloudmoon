import React, { useRef, useState } from "react";
import classNames from "classnames";
import Layout from "@theme/Layout";
import style from "./styles.module.css";

const iconList = [
  { src: "img/music-icon.png", alt: "网易云音乐" },
  { src: "img/odin-icon.png", alt: "Odin低代码平台" },
  { src: "img/g11n-icon.png", alt: "G11全球化作业平台" },
  { src: "img/buxiwan-icon.png", alt: "不洗碗工作室官网" },
];

const productIntro = [
  {
    icon: "img/music-icon.png",
    title: "网易云音乐（移动端）",
    text: "仿网易云音乐移动端，功能包括但不限于登录账号，关注/取关，查看歌单，添加收藏，搜索等功能。",
    img: "img/music.png",
    link: "http://music.cloudmoon.asia",
    bgi: "img/bgi1.jpg",
  },
  {
    icon: "img/odin-icon.png",
    title: "Odin低代码平台",
    text: "Odin低代码平台是一款专注于网页创建的低代码构建平台，目的在于为有网站创建需求的个人或团队提供简单易操作的网页创建与设计平台，通过拖拉拽的操作方式和可视化的编辑界面，结合自定的数据配置，简单轻松地创建所需要的专属网页。",
    img: "img/odin.png",
    link: "http://odin.neuqer.com",
    bgi: "img/bgi2.jpg",
  },
  {
    icon: "img/g11n-icon.png",
    title: "G11全球化作业平台",
    text: "OpenEuler 全球化作业平台，翻译来自Gitee的Markdown文档，可以发布任务，申领翻译/审核任务，机器翻译，并可以将翻译结果上传至Gitee或Github。",
    img: "img/g11n.png",
    link: "http://g11n.cloudmoon.asia",
    bgi: "img/bgi1.jpg",
    disabled: true,
  },
  {
    icon: "img/buxiwan-icon.png",
    title: "不洗碗工作室官网",
    text: "工作室官网，展示工作室相关信息，以及工作室的宣传。",
    img: "img/buxiwan.png",
    link: "http://buxiwan.cloudmoon.asia",
    bgi: "img/bgi3.jpg",
  },
];

const MyProject: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeProduct = (i: number) => {
    requestAnimationFrame(() => {
      setIndex(i);
      containerRef.current!.style.transform = `translateY(-${i * 100}%)`;
    });
  };

  return (
    <Layout
      noFooter
      description="Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长 Cloudmoon 云月"
    >
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
