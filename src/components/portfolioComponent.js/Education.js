import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import ghpsLogo from "../../assets/ghps_logo.jpeg";
import gyan_logo from "../../assets/jai_sch_logo.jpeg";
import col_image from "../../assets/col_image.jpeg"
const EducationContainer = styled.div`
  padding: 10px 20px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.span`
  font-weight: 500;
  color: #4d5156;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ExpandButton = styled(ExpandIcon)`
  cursor: pointer;
  margin-left: 5px;
`;

const ExtendedDetails = styled.div`
  color: #4d5156;
  margin-top: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const EducationLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const EducationItem = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
  }
`;

const ResultTitle = styled.p`
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ResultSnippet = styled.div`
  color: #4d5156;
  font-size: 16px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Highlight = styled.div`
  margin-bottom: 30px;
`;

const HighlightHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HighlightText = styled.p`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
  text-align: left;
  align-items: center;
  color: #4d5156;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DisplayResults = styled.div`
  display: grid;
  gap: 100px;
  grid-template-columns: 3fr 2fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const EducationSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  align-items: center;
  border: 1px solid #dfe1e5;
  width: 80%;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Link = styled.a`
  color: #1a0dab;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Education = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("•").map((line, index) => (
      <span key={index}>
        {index > 0 && "•"}
        {line}
        {index < description.split("•").length - 1 && <br />}
      </span>
    ));
  };

  const toggleExpanded = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const educationDetails = [
    {
      id: 1,
      institution: "Indian Institute Of Information And Technology ,Nagpur",
      duration: "Dec 2021 - July 2025",
      qualification: "B.Tech (Electronics And Communication Engineering)",
      description: `• Participated in numerous hackathons and won various positions.• I was part of tech community named
       codechef chapter mait.
      Received medal in table tennis competition.• I was able to get 3 Job opportunities in multiple companies.`,
      gpa: "Overall GPA: 8.08",
      link: "https://iiitn.ac.in",
      logo: "data:image/png;base64,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",
    },
    {
      id: 2,
      institution: "Gyan Jyotii Vidhyapeeth, Jaipur",
      duration: "Apr 2020 -  2021",
      qualification: "Class 12th",
      score: "92.4%",
      link: "http://www.gyaanjyotiividyapeeth.co.in",
      description: `• I was the Information technology head minister of my school and handled all tech related events.• I won various debating competitions.• I have been a state level soccer player for 3 years.`,
      logo: gyan_logo ,
    },
    {
      id: 3,
      institution: "Guru Hari Kishan Public School, New Delhi",
      duration: "July 2018 - Apr 2019",
      qualification: "Class 10th",
      description: `• Vice House Captain of my school. Won various exhibitions competitions.• Got ranks in national olympiads and athelete events.`,
      score: "86%",
      link: "https://ghpskalkaji.org/",
      logo: ghpsLogo,
    },
  ];

  return (
    <DisplayResults>
      <EducationContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <EducationLogo
                src={educationDetails[0].logo}
                alt={`${educationDetails[0].institution} Logo`}
              />
              <ResultTitle>
                <Heading href={educationDetails[0].link}>
                  {educationDetails[0].qualification} -{" "}
                  {educationDetails[0].institution}
                </Heading>
                <br />
                <Link href={educationDetails[0].link}>
                  {educationDetails[0].link}
                </Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>{educationDetails[0].duration}</ResultSnippet>
            <ResultSnippet>
              {educationDetails[0].gpa || educationDetails[0].score}
            </ResultSnippet>
            <p style={{ color: "#4d5156" }}>
              {renderDescriptionWithLineBreaks(educationDetails[0].description)}
            </p>
          </Highlight>
        </HighlightContent>
        {educationDetails.slice(1).map((education, index) => (
          <EducationItem key={education.id}>
            <ResultHeader>
              <EducationLogo
                src={education.logo}
                alt={`${education.qualification} Logo`}
              />
              <ResultTitle>
                <Heading href={education.link}>
                  {education.qualification} - {education.institution}
                </Heading>
                <br />
                <Link href={education.link}>{education.link}</Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>
              {education.duration} - {education.gpa || education.score}
              <ExpandButton onClick={() => toggleExpanded(index)} />
            </ResultSnippet>
            <ExtendedDetails show={expanded[index]}>
              <p>{renderDescriptionWithLineBreaks(education.description)}</p>
            </ExtendedDetails>
          </EducationItem>
        ))}
      </EducationContainer>
      <EducationSideContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "12px",
            color: "#4d5156",
          }}
        >
          <img
            src={col_image}
            alt="not available"
            style={{ borderRadius: "4px", width: "100%" }}
          />
          <HighlightHeader>IIITN - 2021-2025</HighlightHeader>
        </div>
        <HighlightText>
          B.Tech in Electronics And Communication Engineering with a focus on software
          development, algorithms, and data structures. Achieved an overall GPA
          of 8.08 , participating in various tech events and projects.
        </HighlightText>
      </EducationSideContent>
    </DisplayResults>
  );
};

export default Education;
