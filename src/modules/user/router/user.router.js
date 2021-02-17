import MainLayout from '../../../layouts/MainLayout.vue';

export default {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: '/user/list',
            name: 'UserListPage',
            component: import('../pages/UserListPage.vue'),
            meta: {
                requiresAuth: true,
                breadcrumb: [
                    {
                        title: 'user.userList.breadcrumb.title',
                    },
                ],
            },
        },
    ],
};
