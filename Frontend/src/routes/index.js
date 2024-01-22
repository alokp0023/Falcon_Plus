import React from 'react'
import { Route } from 'react-router-dom'

// components
import PrivateRoute from './PrivateRoute'

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'))
const Logout = React.lazy(() => import('../pages/auth/Logout'))


// // dashboard
const Dashboard = React.lazy(() => import('../pages/Dashboard'))

// // pages
// const ProfilePages = React.lazy(() => import('../pages/other/Profile/'))
// const InvoicePages = React.lazy(() => import('../pages/other/Invoice'))
// const FAQPages = React.lazy(() => import('../pages/other/FAQ'))
// const PricingPages = React.lazy(() => import('../pages/other/Pricing'))
// const MaintenancePages = React.lazy(() => import('../pages/other/Maintenance'))
// const StarterPages = React.lazy(() => import('../pages/other/Starter'))
// const ContactListPages = React.lazy(() => import('../pages/other/ContactList'))
// const TimelinePages = React.lazy(() => import('../pages/other/Timeline'))

// // error
const Error404 = React.lazy(() => import('../pages/error/Error404'))
const Error404Alt = React.lazy(() => import('../pages/error/Error404Alt'))
const Error500 = React.lazy(() => import('../pages/error/Error500'))


// dashboards
const dashboardRoutes = {
	path: '/admin',
	name: 'Dashboards',
	icon: 'home',
	header: 'Navigation',
	children: [
		{
			path: '/',
			name: 'Root',
			element: <Dashboard />,
			route: PrivateRoute,
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			element: <Dashboard />,
			route: PrivateRoute,
		},
	],
}

// pages
// const customPagesRoutes = {
// 	path: '/pages',
// 	name: 'Pages',
// 	icon: 'pages',
// 	header: 'Custom',
// 	children: [
// 		{
// 			path: '/pages/profile',
// 			name: 'Profile',
// 			element: <ProfilePages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/invoice',
// 			name: 'Invoice',
// 			element: <InvoicePages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/faq',
// 			name: 'FAQ',
// 			element: <FAQPages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/pricing',
// 			name: 'Pricing',
// 			element: <PricingPages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/starter',
// 			name: 'Starter Page',
// 			element: <StarterPages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/contact-list',
// 			name: 'Contact List',
// 			element: <ContactListPages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: '/pages/timeline',
// 			name: 'Timeline',
// 			element: <TimelinePages />,
// 			route: PrivateRoute,
// 		},
// 		{
// 			path: 'pages/error-404-alt',
// 			name: 'Error - 404-alt',
// 			element: <Error404Alt />,
// 			route: PrivateRoute,
// 		},
// 	],
// }

// auth
const authRoutes = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
		route: Route,
	},
	// {
	// 	path: '/auth/register',
	// 	name: 'Register',
	// 	element: <Register />,
	// 	route: Route,
	// },
	{
		path: '/auth/logout',
		name: 'Logout',
		element: <Logout />,
		route: Route,
	},
	// {
	// 	path: '/auth/forgot-password',
	// 	name: 'Forgot Password',
	// 	element: <ForgotPassword />,
	// 	route: Route,
	// },
	// {
	// 	path: '/auth/lock-screen',
	// 	name: 'Lock Screen',
	// 	element: <LockScreen />,
	// 	route: Route,
	// },
]

// public routes
const otherPublicRoutes = [
	{
		path: '*',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: 'pages/error-404',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: 'pages/error-500',
		name: 'Error - 500',
		element: <Error500 />,
		route: Route,
	},
	// {
	// 	path: '/pages/maintenance',
	// 	name: 'Maintenance',
	// 	element: <MaintenancePages />,
	// 	route: Route,
	// },
]

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
	let flatRoutes = []

	routes = routes || []
	routes.forEach((item) => {
		flatRoutes.push(item)
		if (typeof item.children !== 'undefined') {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
		}
	})
	return flatRoutes
}

// All routes
const authProtectedRoutes = [dashboardRoutes]
const publicRoutes = [...authRoutes, ...otherPublicRoutes]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes])
export {
	authProtectedFlattenRoutes, authProtectedRoutes, publicProtectedFlattenRoutes, publicRoutes
}

