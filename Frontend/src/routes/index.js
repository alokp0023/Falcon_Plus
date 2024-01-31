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
const RawMaterial = React.lazy(() => import('../pages/Products/RawMaterial'))
const ProductList = React.lazy(() => import('../pages/Products/ProductList'))
const ProductDetails = React.lazy(() => import('../pages/Products/ProductList/ProductDetails'))

const ManufactureUnit = React.lazy(() => import('../pages/Products/ManufactureUnit'))
const DisputeUnit = React.lazy(() => import('../pages/Products/DisputeUnit'))
const Announcement = React.lazy(() => import('../pages/Announcement'))
// const MaintenancePages = React.lazy(() => import('../pages/other/Maintenance'))
const Attendance = React.lazy(() => import('../pages/Attendance'))
const ManageUnit = React.lazy(() => import('../pages/ManageUnit'))
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
		{
			path: '/attendance',
			name: 'Attendance',
			element: <Attendance />,
			route: PrivateRoute,
		},
		{
			path: '/announcement',
			name: 'Announcement',
			element: <Announcement />,
			route: PrivateRoute,
		},
		{
			path: '/manage-unit',
			name: 'Manage Unit',
			element: <ManageUnit />,
			route: PrivateRoute,
		},
	],
}

const ProductsRoutes = {
	path: '/products',
	name: 'Products',
	icon: 'home',
	header: 'Navigation',
	children: [
		{
			path: '/raw-material',
			name: 'RawMaterial',
			element: <RawMaterial />,
			route: PrivateRoute,
		},
		{
			path: '/product-list',
			name: 'ProductList',
			element: <ProductList />,
			route: PrivateRoute,
			children:[
				{
					path: '/product-details',
					name: 'productDetails',
					element: <ProductDetails />,
					route: PrivateRoute,
					parent:ProductList
				},
			]
		},
		{
			path: '/manufacture-unit',
			name: 'ManufactureUnit',
			element: <ManufactureUnit />,
			route: PrivateRoute,
		},
		{
			path: '/dispute-unit',
			name: 'DisputeUnit',
			element: <DisputeUnit />,
			route: PrivateRoute,
		},
	],
}

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
const authProtectedRoutes = [dashboardRoutes,ProductsRoutes]
const publicRoutes = [...authRoutes, ...otherPublicRoutes]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes])
export {
	authProtectedFlattenRoutes, authProtectedRoutes, publicProtectedFlattenRoutes, publicRoutes
}

