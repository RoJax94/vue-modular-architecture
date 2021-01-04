import AdminModule from './AdminModule.vue';
import DashboardPage from './pages/DashboardPage.vue';

export default [
  {
    path: '/admin',
    name: 'admin',
    component: AdminModule,
    children: [
      {
        path: '',
        name: 'admin.dashboard',
        component: DashboardPage,
      },
    ],
  },
];
