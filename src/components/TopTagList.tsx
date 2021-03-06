import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NoFussLink } from ".";
import styled from "styled-components";

const Tag = styled(NoFussLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  font-family: var(--font-family-mono);

  :hover {
    color: var(--text-title);
  }

  color: var(--text-light);
`;

const StyledTagList = styled.div`
  border-radius: 1rem;
  border: 1px solid var(--text-lightest);

  a + a {
    border-top: 1px solid var(--text-lightest);
  }
`;

interface Query {
  allTags: {
    group: {
      totalCount: number;
      name: string;
    }[];
  };
}

export const TopTagList: React.FC = () => {
  const { allTags } = useStaticQuery<Query>(graphql`
    query {
      allTags: allMdx {
        group(field: frontmatter___tags) {
          totalCount
          name: fieldValue
        }
      }
    }
  `);

  return (
    <StyledTagList>
      {allTags.group
        .sort((a, b) => b.totalCount - a.totalCount)
        .slice(0, 10)
        .map(tag => (
          <Tag key={tag.name} to={`/t/${tag.name.toLowerCase()}`}>
            <span>{tag.totalCount}</span>
            <span>{tag.name}</span>
          </Tag>
        ))}
    </StyledTagList>
  );
};
