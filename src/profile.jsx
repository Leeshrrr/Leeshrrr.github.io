"use client";

import React from "react";
import "./styles.css"; // 引入 CSS

export default function Profiless(){
  const avatar="/images/avatar.png";

  const bio="Hi! I am Yechun (you can also call me Caroline 😊). I’m a first-year PhD student in <a href='https://idvxlab.com/' class='item-link'>iDVX Lab </a>, supervised by <a href='https://xiaoyangtao.github.io/' class='item-link'>Prof. Yang Shi </a>. "
  return (
    <div className="profile-card">
      {/* 左侧头像*/}
      <div className="profile-left">
        <img src={avatar} alt="Avatar" className="profile-avatar" />
      </div>

      {/* 右侧自我介绍 */}
      <div className="profile-right">
      <p className="profile-bio" dangerouslySetInnerHTML={{ __html: bio }}></p>
      </div>
    </div>
  );
};

