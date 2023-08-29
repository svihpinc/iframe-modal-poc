import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/about',
			alias: '/',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/AboutView.vue'),
		},
		{
			path: '/caliper',
			name: 'caliper',
			component: () => import('@/views/CaliperView.vue'),
		},
	],
});

export default router;
