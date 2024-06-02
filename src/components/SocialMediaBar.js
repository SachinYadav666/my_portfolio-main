import React from "react";
import styled from "styled-components";
import {FaLinkedin, FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const SocialIconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 50px; // Size of the icon container
  height: 50px; // Size of the icon container
  border-radius: 50%;
  background: #f0f0f0;
  color: black; // Icon color
  text-decoration: none;

  &:hover {
    background: #e8e8e8; // Background color on hover
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Icon = styled.div`
  font-size: 25px; // Icon size
  padding-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SocialMediaBar = () => {
  return (
    <SocialMediaContainer>
      <LabelWrapper>
        <SocialIconWrapper
          href="https://leetcode.com/u/sachinyadav666/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
          <TbBrandLeetcode />
          </Icon>
        </SocialIconWrapper>
        <p>LeetCode</p>
      </LabelWrapper>
      <LabelWrapper>
        <SocialIconWrapper
          href="https://www.linkedin.com/in/sachin-yadav-114b0a228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaLinkedin />
          </Icon>
        </SocialIconWrapper>
        <p>LinkedIn</p>
      </LabelWrapper>
      <LabelWrapper>
        <SocialIconWrapper
          href="https://github.com/SachinYadav666?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <FaGithub />
          </Icon>
        </SocialIconWrapper>
        <p>Github</p>
      </LabelWrapper>
    </SocialMediaContainer>
  );
};

export default SocialMediaBar;
