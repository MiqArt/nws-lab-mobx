import React from 'react'
import { observer } from 'mobx-react-lite';
import { CoursesStoreImpl } from '../store/CoursesStore';
import CoursesList from '../components/CoursesList';
import Header from '../components/Header';
import styled from 'styled-components';

interface IProps {
  coursesStore: CoursesStoreImpl;
}

const Dashboard: React.FC<IProps> = observer(({ coursesStore }) => {
  return (
    <ContentWrapper>
      <Header title='Courses'/>
      <CoursesList courses={coursesStore.isFilteredBy ? coursesStore.filteredCourses : coursesStore.courses}/>
    </ContentWrapper>
  );
});

export default Dashboard;

// Styles |
//        v

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFF8F5;
`;
