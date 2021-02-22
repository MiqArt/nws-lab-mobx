import React from 'react';
import styled from 'styled-components';
import { ICourse } from '../types/coursesTypes';
import { ReactComponent as PlayIcon } from '../assets/icons/play.svg';

interface IStyled {
  imageSrc: string;
}

interface IProps {
  details: ICourse;
}

const Course: React.FC<IProps> = ({ details: { title, lessonsCount, duration, imageSrc } }) => {
  return (
    // @ts-ignore
    <CourseWrapper imageSrc={imageSrc}>
      <CourseContent>
        <CourseHeader>
          <CourseTitleCountWrapper>
            <CourseHeaderBigText>{title}</CourseHeaderBigText>
            <CourseHeaderSmallText>{lessonsCount} lessons</CourseHeaderSmallText>
          </CourseTitleCountWrapper>
          <CourseHeaderSmallText>{duration} min</CourseHeaderSmallText>
        </CourseHeader>
        <CourseFooterBtn>
          <PlayIcon/>
        </CourseFooterBtn>
      </CourseContent>
    </CourseWrapper>
  )
}

export default Course;

// Styles |
//        v

const CourseWrapper = styled.div<IStyled>`
  position: relative;
  width: 100%;
  margin-bottom: 5%;
  background-image: url(${({imageSrc}) => imageSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  padding-bottom: 41%;
`;

const CourseContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* padding: 42px 96px 64px 42px; */
  padding: 4% 9% 6% 4%;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  color: #FFFFFF;
`;

const CourseTitleCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseHeaderBigText = styled.span`
  font-size: 24px;
  line-height: 29px;
  @media (max-width: 420px) {
    font-size: 14px;
    line-height: 16px;
  };
`;

const CourseHeaderSmallText = styled.span`
  font-size: 16px;
  line-height: 29px;
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 16px;
  };
`;

const CourseFooterBtn = styled.button` // Better to use <a href={'/courses/id'}> link
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: calc(5% + 25px);
  height: calc(10% + 26px);
  border: none;
  border-radius: 16px;
  bottom: 15%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.4);
  &:hover {
    background-color: rgba(241, 241, 241, 0.4);
  }
  outline: none;
  & svg {
    width: 24%;
    height: 35%;
  }
`;