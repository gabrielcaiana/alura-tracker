import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';

export default [
  {
    path: '/',
    name: 'tasks',
    component: Tasks,
  },

  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
];
