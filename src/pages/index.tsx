import React, { useEffect } from "react";
import Layout from "@theme/Layout";

const MAGIC_TEXT = "This is a hovel";

const MagicText: React.FC = () => {
  useEffect(() => {
    const canvas: any = document.querySelector("#scene");
    canvas.style.background =
      "background: rgb(255,255,255); background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(48,56,70,1) 100%);";
    const ctx = canvas.getContext("2d");
    let particles = [];
    let amount = 0;
    const mouse = { x: 0, y: 0 };
    let radius = 1;

    const colors = ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"];

    let ww = (canvas.width = window.innerWidth);
    let wh = (canvas.height = window.innerHeight + 100);

    function Particle(x: number, y: number) {
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      this.dest = {
        x: x,
        y: y,
      };
      this.r = Math.random() * 5 + 2;
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = (Math.random() - 0.5) * 20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.05 + 0.94;

      this.color = colors[Math.floor(Math.random() * 6)];
    }

    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000;
      this.accY = (this.dest.y - this.y) / 1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();

      const a = this.x - mouse.x;
      const b = this.y - mouse.y;

      const distance = Math.sqrt(a * a + b * b);
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };

    function onMouseMove(e: any) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onTouchMove(e: any) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }

    function onTouchEnd(e: any) {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function initScene() {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height + 100);

      ctx.font = "bold " + ww / 10 + "px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(MAGIC_TEXT, ww / 2, wh / 2);

      const data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for (let i = 0; i < ww; i += Math.round(ww / 150)) {
        for (let j = 0; j < wh; j += Math.round(ww / 150)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            particles.push(new Particle(i, j));
          }
        }
      }
      amount = particles.length;
    }

    function onMouseClick() {
      radius++;
      if (radius === 5) {
        radius = 0;
      }
    }

    function render() {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < amount; i++) {
        particles[i].render();
      }
    }

    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", initScene);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return <canvas id="scene" style={{ background: "var(--index-canvas-bgc-linear)" }} />;
};

export default function Home(): JSX.Element {
  return (
    <Layout description="Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长">
      <MagicText />
    </Layout>
  );
}
