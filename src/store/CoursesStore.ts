import { makeObservable, observable } from "mobx";
import courses from "../data/courses";
import { TCoursesList } from "../types/coursesTypes";

export class CoursesStoreImpl {
  courses: TCoursesList = courses;
  isFilteredBy: string = '';
  filteredCourses: TCoursesList = courses;

  constructor() {
    makeObservable(this, {
      courses: observable,
      isFilteredBy: observable,
      filteredCourses: observable
    });
  };

  filterByPopular() {
    const filteredCourses = courses.filter(item => item.popular);
    this.filteredCourses = filteredCourses;
    this.isFilteredBy = 'popular'; 
  };
  
  filterByFavorite() {
    const filteredCourses = courses.filter(item => item.favorite);
    this.filteredCourses = filteredCourses;
    this.isFilteredBy = 'favorite';
  };

  filterByNew() {
    const filteredCourses = courses.filter(item => item.new);
    this.filteredCourses = filteredCourses;
    this.isFilteredBy = 'new';
  };

  reset() {
    this.isFilteredBy = '';
  };
};

export const CoursesStore = new CoursesStoreImpl();
