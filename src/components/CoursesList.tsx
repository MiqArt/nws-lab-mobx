import React from 'react';
import styled from 'styled-components';
import { TCoursesList } from '../types/coursesTypes';
import Course from './Course';

interface IProps {
  courses: TCoursesList;
}

const CoursesList: React.FC<IProps> = ({ courses }) => {
  return (
    <CoursesListWrapper>
      {
        courses.map((details) => (
          <Course details={details} />
        ))
      }
    </CoursesListWrapper>
  )
}

export default CoursesList;

// Styles |
//        v

const CoursesListWrapper = styled.div`
  width: 100%;
  height: 86%;
  padding: 0 4% 30px 4%;
  margin-top: 4%;
  background-color: #FFF8F5;
  overflow-y: auto;
  @media (max-width: 768px) {
    margin-top: 40px;
    height: 79%;
  }
  @media (max-width: 420px) {
    margin-top: 54px;
  };
`