"use client";

import React from "react";
import "./styles.css"; // 引入 CSS

export default function Profiless(){
  const avatar="/images/avatar.png";
  const contact= ["pengyechun0406 (at) gmail.com"];
  const bio="I am pursuing my PhD degree in Design at <a href='https://idvxlab.com/' class='item-link'>iDVX Lab </a>, College of Design and Innovation, Tongji University, supervised by <a href='https://xiaoyangtao.github.io/' class='item-link'>Prof. Yang Shi </a>. I received my Bachelor’s degree in Media and Mommunication Design from College of Design and Innovation, Tongji University. <div>Contact: pengyechun0406@gmail.com </div>"
  return (
    <div className="profile-card">
      {/* 左侧头像 + 联系方式 */}
      <div className="profile-left">
        <img src={avatar} alt="Avatar" className="profile-avatar" />
        
        {/* <div className="profile-contact">
        <h1>Yechun Peng</h1>
          {contact.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div> */}
      </div>

      {/* 右侧自我介绍 */}
      <div className="profile-right">
      <p className="profile-bio" dangerouslySetInnerHTML={{ __html: bio }}></p>
      </div>
    </div>
  );
};

