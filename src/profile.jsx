"use client";

import React from "react";
import "./styles.css"; // 引入 CSS

export default function Profiless(){
  const avatar="/images/avatar.png";

  const bio = `
    <p>Hi! I am Yechun (you can also call me Caroline😊). I’m a first-year PhD student in <a href="https://tjdi.tongji.edu.cn/?lang=en/" class="item-link">College of Design and Innovation (D&I)</a> at <a href="https://en.tongji.edu.cn/p/#/" class="item-link">Tongji University</a>. I am also a member of <a href="https://idvxlab.com/" class="item-link"> Intelligent Big Data Visualization Lab (iDVX Lab)</a>, supervised by <a href="https://xiaoyangtao.github.io/" class="item-link"> Prof. Yang Shi</a>.</p>
    <p>My research is situated at the intersection of Human Computer Interaction and data visualization, with a current focus on Data Visualization for Social Good. Through qualitative and theory driven research, I examine the non-neutrality of data visualization, how the public engage in visualization practices, and how data visualizations can influence public stances, shape value judgments, and potentially contribute to behavioral change in the context of public issues.</p>
    <p>I’m also good in data visualization design and coding, as well as in visual and interaction design. My data storytelling and visualization works have received multiple awards.</p>
    <p>I received my bachelor’s degree in Media and Communication Design from D&I at Tongji University. I went to Parsons School of Design as an exchange student in Design and Technology, where I first get to know into data visualization and developed an interest in it. I later joined iDVX Lab and pursued a master’s degree in Artificial Intelligence and Data Design at Tongji University. In the third year of my master’s program, I transitioned into the PhD program through a combined master doctoral track.</p>
  `;
  return (
    <div className="profile-card">
      {/* 左侧头像*/}
      <div className="profile-left">
        <img src={avatar} alt="Avatar" className="profile-avatar" />
        <div className="profile-contact">
          <div>Email: pengyechun0406@gmail.com</div>
          <div>Wechat: pyc8226</div>
          <div className="profile-contact-links"><a href='https://scholar.google.com/citations?hl=zh-CN&user=atNmmZAAAAAJ' class='item-link'>google scholar</a>丨<a href='https://www.linkedin.com/in/yechun-peng/' class='item-link'>LinkedIn</a>丨<a href='/cv.pdf' class='item-link'>CV</a></div>
        </div>
      </div>

      {/* 右侧自我介绍 */}
      <div className="profile-right">
      <p className="profile-bio" dangerouslySetInnerHTML={{ __html: bio }}></p>
      </div>
    </div>
  );
};

