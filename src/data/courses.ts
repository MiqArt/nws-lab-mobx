import { TCoursesList } from "../types/coursesTypes";


const courses: TCoursesList = [
  {
    title: 'Illustration',
    lessonsCount: 24,
    duration: 134,
    imageSrc: '/courses/illustration.png',
    popular: false,
    favorite: false,
    new: false
  },
  {
    title: 'Graphic design',
    lessonsCount: 30,
    duration: 236,
    imageSrc: '/courses/graphic_design.png',
    popular: false,
    favorite: true,
    new: false
  },
  {
    title: '3D Modeling',
    lessonsCount: 78,
    duration: 155,
    imageSrc: '/courses/3d.png',
    popular: true,
    favorite: false,
    new: false
  },
  {
    title: 'Abstraction',
    lessonsCount: 59,
    duration: 120,
    imageSrc: '/courses/abstraction.png',
    popular: true,
    favorite: false,
    new: true
  },
  {
    title: 'Photoshop',
    lessonsCount: 7,
    duration: 149,
    imageSrc: '/courses/photoshop.png',
    popular: false,
    favorite: true,
    new: true
  },
  {
    title: 'UI/UX',
    lessonsCount: 21,
    duration: 189,
    imageSrc: '/courses/uiux.png',
    popular: true,
    favorite: false,
    new: true
  },
  {
    title: 'Figma',
    lessonsCount: 44,
    duration: 141,
    imageSrc: '/courses/figma.png',
    popular: false,
    favorite: true,
    new: false
  },
  {
    title: 'Animations',
    lessonsCount: 33,
    duration: 157,
    imageSrc: '/courses/animations.png',
    popular: false,
    favorite: true,
    new: true
  },
  {
    title: 'Game Design',
    lessonsCount: 98,
    duration: 146,
    imageSrc: '/courses/game_design.png',
    popular: true,
    favorite: false,
    new: true
  },
];

export default courses;
