import React from "react";
import { ProjectCard } from ".";
import styled from "styled-components";

const StyledProjectCardList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-items: stretch;
  align-items: stretch;
`;

interface Props {
  projects: {
    frontmatter: {
      title: string;
      summary: string;
      stack: string[];
      date: string;
      slug: string;
      image: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  }[];
}

export const ProjectCardList: React.FC<Props> = ({ projects }) => {
  return (
    <StyledProjectCardList>
      {projects.map(({ frontmatter }) => (
        <ProjectCard {...frontmatter} key={frontmatter.slug} />
      ))}
    </StyledProjectCardList>
  );
};
