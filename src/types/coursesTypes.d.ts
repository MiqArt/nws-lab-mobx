// Types for CoursesList and Course

export interface ICourse {
  title: string;
  lessonsCount: number;
  duration: number;
  imageSrc: string;
  popular: boolean;
  favorite: boolean;
  new: boolean;
}

export type TCoursesList = Array<ICourse>; 