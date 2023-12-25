import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import MagicText from "../components/MagicTextCanvas";

export default function Home(): JSX.Element {
  useEffect(() => {
    // 主动推送代码，用于百度网站收录
    (function () {
      var bp = document.createElement("script");
      var curProtocol = window.location.protocol.split(":")[0];
      if (curProtocol === "https") {
        bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
      } else {
        bp.src = "http://push.zhanzhang.baidu.com/push.js";
      }
      bp.defer = true;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })(),
      [];
  });

  return (
    <Layout description="Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长 Cloudmoon 云月">
      <MagicText text="This is a hovel" />
    </Layout>
  );
}
