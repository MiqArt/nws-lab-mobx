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
  @media only screen and (min-device-width: 480px) 
  and (max-device-width: 568px) 
  and (orientation: landscape) {
    height: 48%;
  }
  @media only screen and (min-device-width: 569px) 
  and (max-device-width: 667px) 
  and (orientation: landscape) {
    height: 55%;
  }
  @media only screen and (min-device-width: 668px) 
  and (max-device-width: 812px) 
  and (orientation: landscape) {
    height: 59%;
  }
  @media only screen and (min-device-width: 813px) 
  and (max-device-width: 926px) 
  and (orientation: landscape) {
    height: 64%;
  }
`