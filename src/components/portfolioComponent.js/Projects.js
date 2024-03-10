import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import hotel from "../../assets/hotel.jpg";
import weather from "../../assets/weather.jpg";
import ecom from "../../assets/ecom.jpg";


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
    return <HighlightContentIMAGE src={hotel} alt="Project Image" />;
  }

  const projects = [
    {
      id: 1,
      title: "Hotel Booking App",
      logo: hotel,
      repoLink: "https://github.com/SachinYadav666/Hotel-Booking-App",
      smallDescription:`Discover convenience and comfort on our MERN-based hotel booking website. Seamless UI with real-time availability, secure transactions, and comprehensive hotel profiles. Effortless planning for a delightful travel experience. portfolio project with speech recognition, routing, debouncing, etc.`,
      description: `•Technology Stack: Utilizing the power of the MERN stack - MongoDB, Express.js, React, and Node.js.
• Secure Transactions: The booking process is streamlined with secure transactions, ensuring user data and reservations are handled with utmost security.`,
    },


    {
      id: 2,
      title: " Weather APP",
      logo: weather,
      repoLink: "https://github.com/SachinYadav666/weatherApp",
      smallDescription: ` Implemented automatic location detection and real-time temperature information using APIs`,
      description: `• Enabled users to easily retrieve temperature details of any location through search functionality.
• Technology Used: JavaScript, React.js`,

    },
    {
      id: 3,
      title: "E-Commerce Website",
      logo: ecom,
      repoLink: "https://github.com/SachinYadav666/Ecommerce-Website",
      smallDescription:
        "The e-commerce website features a responsive navigation bar, Glidejs-powered carousel, and category sections.",
      description: `• Overall, this e-commerce website aims to create a seamless and secure online shopping experience for customers while offering businesses an efficient platform for selling products and services to a global audience.
      Technolgies Used: HTML, CSS, JavaScript`,
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
           Hotel Booking  with Razorpay
          </LatestProjectHeader>
        </div>
        <LatestProjectText>
          <span>
          "Discover Your Dream Stay, Book with SachinHolidays.com ."
            <br />
            <br/>
            Streamlining travel planning, our hotel booking website aims to offer a seamless, secure, and enjoyable experience.
             We prioritize user satisfaction, diverse accommodations, and personalized service to create memorable stays worldwide
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
