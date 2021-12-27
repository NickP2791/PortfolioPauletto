import React from "react";
import WorksProject from "./WorksProject";
import styled from "styled-components";

const WorksProjectGrid = ({ allProjects }) => {
  console.log(allProjects);

  return (
    <ProjectGrid>
      {allProjects.map((oneProj) => {
        return <WorksProject key={oneProj.id} oneProj={oneProj} />;
      })}
    </ProjectGrid>
  );
};

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 2rem;

  .project:nth-child(2) {
    direction: rtl;
    align-self: flex-end;
  }

  .project:nth-child(2) .project__description {
    direction: ltr;
  }
`;

export default WorksProjectGrid;
