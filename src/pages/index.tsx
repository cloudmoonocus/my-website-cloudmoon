import React from "react";
import Layout from "@theme/Layout";
import MagicText from "../components/MagicTextCanvas";

export default function Home(): JSX.Element {
  return (
    <Layout description="Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长 Cloudmoon 云月">
      <MagicText text="This is a hovel" />
    </Layout>
  );
}
