import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import edulity from "../../assets/edulity.jpg";
import train from "../../assets/train.jpg";
import social from "../../assets/social.jpg";
import  ed from  "../../assets/ed.jpg"

const ProjectsContainer = styled.div`
  padding: 10px 20px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.span`
  font-weight: 600;
`;

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column; // Stack content vertically on small screens
  }
`;

const LatestProjectHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 16px; // Increase font size for readability
  }
`;

const LatestProjectText = styled.p`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
  text-align: left;
  align-items: center;
  color: #4d5156;
  @media (max-width: 768px) {
    font-size: 14px; // Increase font size for readability
  }
`;

const Highlight = styled.div`
  margin-bottom: 30px;
`;

const ProjectItem = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px; // Reduce padding on small screens
  }
`;
const ResultHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically
    align-items: flex-start;
  }
`;

const ResultTitle = styled.a`
  margin: 0;
  cursor: pointer;
  color: black;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 16px; // Adjust font size for smaller screens
  }
`;

const ResultSnippet = styled.p`
  color: #4d5156;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const FullDescription = styled.p`
  color: #4d5156;
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

const HighlightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  align-items: center;
  border: 1px solid #dfe1e5;
  width: 80%;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%; // Full width on small screens
    margin-top: 20px; // Add some space above this section on small screens
  }
`;

const ProjectLogo = styled.img`
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

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    display: flex;
  }
`;

const HighlightContentIMAGE = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Projects = () => {
  const [showFullDescription, setShowFullDescription] = useState(
    Array(3).fill(false)
  );

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("•").map((line, index) => (
      <span key={index}>
        {index > 0 && "•"}
        {line}
        {index < description.split("•").length - 1 && <br />}
      </span>
    ));
  };

  function LatestProjectIMAGEVIEWER() {
    return <HighlightContentIMAGE src={edulity} alt="Project Image" />;
  }

  const projects = [
    {
      id: 1,
      title: "Edulity",
      logo: ed,
      repoLink: "https://github.com/SachinYadav666/Edulity",
      smallDescription:`Spearheaded the architecture of a microservices-based Edtech platform using the MERN stack, deploying a scalable RESTful API with Node.js and Express.js, and designing a modern UI with React.js to enhance user experience.`,
      description: `•Technology Stack: HTML, Tailwind, JavaScript, React.js, Chart.js, Node.js, Express.js, MongoDB.
• Enabled seamless transactions with Razorpay and enhanced user authentication with JWT, increasing security and transaction efficiency, thereby facilitating learner course access and instructor content curation.`,
    },


    {
      id: 2,
      title: "Rail Reservation Using C++",
      logo: train,
      repoLink: "https://github.com/SachinYadav666/Rail-Reservation-System-in-CPP",
      smallDescription: ` Engineered a train reservation system in C++ enabling users to register, log in, book and cancel tickets, view train details, make payments, and provide feedback, thereby enhancing user experience and system reliability.`,
      description: `•Applied OOP principles (encapsulation, inheritance, polymorphism) and advanced file handling techniques for data persistence, resulting in a robust and maintainable system.
• Integrated secure user authentication, comprehensive error handling, and rigorous data validation, ensuring system integrity and reliability.
• Technology Used: C++`,

    },
    {
      id: 3,
      title: "Social Media App",
      logo: social,
      repoLink: "https://github.com/SachinYadav666/MERN_SocialMedia-App",
      smallDescription:
        "Developed a social media platform enabling users to share posts, comments, and like content seamlessly, with a modern dark mode for improved user experience.",
      description: `Ensured platform accessibility across various devices and integrated a like feature that increased post engagement by30%. It provides an engaging and convenient way for users to connect and share their ideas.
      Technolgies Used: React, JavaScript, CSS, MongoDB, Express, Node, Firebase.`,
    },
  ];

  const toggleDescription = (index) => {
    setShowFullDescription((prev) => {
      const newShow = [...prev];
      newShow[index] = !newShow[index];
      return newShow;
    });
  };

  return (
    <DisplayResults>
      <ProjectsContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <ProjectLogo
                src={projects[0].logo}
                alt={`${projects[0].title} Logo`}
              />
              <div>
                <ResultTitle href={projects[0].repoLink} target="_blank">
                  {projects[0].title}
                </ResultTitle>
                <br />
                <ProjectLink href={projects[0].repoLink} target="_blank">
                  {projects[0].repoLink}
                </ProjectLink>
              </div>
            </ResultHeader>
            <ResultSnippet>
              {projects[0].smallDescription}
              <br />
              <br />
              {renderDescriptionWithLineBreaks(projects[0].description)}
            </ResultSnippet>
          </Highlight>
        </HighlightContent>
        {projects.slice(1).map((project, index) => (
          <ProjectItem key={project.id}>
            <ResultHeader>
              <ProjectLogo src={project.logo} alt={`${project.title} Logo`} />
              <div>
                <ResultTitle href={project.repoLink} target="_blank">
                  {project.title}
                </ResultTitle>
                <br />
                <ProjectLink href={project.repoLink} target="_blank">
                  {project.repoLink}
                </ProjectLink>
              </div>
            </ResultHeader>
            <ResultSnippet
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              {project.smallDescription}
              <ExpandIcon
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  fontSize: "24px",
                }}
                onClick={() => toggleDescription(index)}
              />
            </ResultSnippet>
            {showFullDescription[index] && (
              <FullDescription>
                {renderDescriptionWithLineBreaks(project.description)}
              </FullDescription>
            )}
          </ProjectItem>
        ))}
      </ProjectsContainer>
      <HighlightSideContent>
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
          <LatestProjectIMAGEVIEWER />
          <LatestProjectHeader>
           Edulity
          </LatestProjectHeader>
        </div>
        <LatestProjectText>
          <span>
          "Discover Your Dream Education."
            <br />
            <br/>
            Edulity is a versatile and intuitive ed-tech platform that enables users to create, consume, and rate educational content. It provides a seamless and interactive learning experience for students while offering a platform for instructors to showcase their expertise and connect with learners worldwide. 
            <br />
            <br />
            <Heading>Developers: </Heading>
            Sachin
            <br />
            <br />
            <Heading>Tech: </Heading>
            MERN stack
            <br />
            <br />
            {/* <Heading>Achievements: </Heading>
            ------- */}
            <br />
          </span>
        </LatestProjectText>
      </HighlightSideContent>
    </DisplayResults>
  );
};

export default Projects;
