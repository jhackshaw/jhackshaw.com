import React from "react";
import Img from "gatsby-image";
import { Card } from "./Card";
import { NoFussLink } from "./NoFussLink";
import { Tags } from "./Tags";
import { PostTitle } from "./PostTitle";
import { PostSummaryQuery } from "../queries";
import { useDefaultImage } from "../hooks";
import { FaThumbtack } from "react-icons/fa";
import styled from "styled-components";

export const StyledPostCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: background-color 350ms ease 0s;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    :hover {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);

      ${PostTitle} {
        color: var(--text-title);
      }
    }
  }
`;

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    /* height: 200px; */
    width: 100%;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-flow: column;
  height: 100%;

  ${PostTitle} {
    margin: 0 0 1rem;
  }
`;

const PublishDetails = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1;
  margin: 3px 0 12px;
  color: var(--text-lightest);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  span {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

const Pinned = styled(FaThumbtack)`
  color: var(--text-title);
  margin-right: 0.5rem;
`;

const Flex = styled.div`
  flex: 1;
`;

export const PostCard: React.FC<PostSummaryQuery> = ({
  frontmatter,
  fields,
  timeToRead
}) => {
  const defaultImage = useDefaultImage();
  const { image, title, tags, date, link, pinned } = frontmatter;

  return (
    <NoFussLink to={link ?? `/post${fields.slug}`}>
      <StyledPostCard>
        <ImageWrapper>
          <Img fluid={image?.childImageSharp.fluid ?? defaultImage} />
        </ImageWrapper>
        <CardBody>
          <PublishDetails>
            <span>
              {pinned && <Pinned />}
              {date}
            </span>
            {timeToRead && <span>{`${timeToRead} min read`}</span>}
          </PublishDetails>
          <PostTitle>{title}</PostTitle>
          <Flex />
          <Tags tags={tags} />
        </CardBody>
      </StyledPostCard>
    </NoFussLink>
  );
};
