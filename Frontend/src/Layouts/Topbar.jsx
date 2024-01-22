import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// assets
import logo from '../assets/images/logo.png'
import logoSm from '../assets/images/logo-sm.png'
import profilePic from '../assets/images/avatar-2.jpg'
import { ThemeSettings, useThemeContext } from '../common/context'
import { useViewport } from '../hooks'
import ProfileDropdown from '../components/Topbar'
import useThemeCustomizer from '../components/ThemeCustomizer/useThemeCustomizer'
/**
 * for subtraction minutes
 */
function subtractHours(date, minutes) {
	date.setMinutes(date.getMinutes() - minutes)
	return date
}

const profileMenus = [
	// {
	// 	label: 'My Account',
	// 	icon: 'ri-account-circle-line',
	// 	redirectTo: '/pages/profile',
	// },
	// {
	// 	label: 'Settings',
	// 	icon: 'ri-settings-4-line',
	// 	redirectTo: '/pages/profile',
	// },
	// {
	// 	label: 'Support',
	// 	icon: 'ri-customer-service-2-line',
	// 	redirectTo: '/pages/faq',
	// },
	// {
	// 	label: 'Lock Screen',
	// 	icon: 'ri-lock-password-line',
	// 	redirectTo: '/auth/lock-screen',
	// },
	{
		label: 'Logout',
		icon: 'ri-logout-box-line',
		redirectTo: '/auth/login',
	},
]

const Topbar = ({ toggleMenu, navOpen }) => {
	const { sideBarType } = useThemeCustomizer()
	const { width } = useViewport()

	/**
	 * Toggle the leftmenu when having mobile screen
	 */

	const handleLeftMenuCallBack = () => {
		if (width < 768) {
			if (sideBarType === 'full') {
				showLeftSideBarBackdrop()
				document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
			} else {
				updateSidebar({ size: ThemeSettings.sidebar.size.full })
			}
		} else if (sideBarType === 'condensed') {
			updateSidebar({ size: ThemeSettings.sidebar.size.default })
		} else if (sideBarType === 'full') {
			showLeftSideBarBackdrop()
			document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
		} else if (sideBarType === 'fullscreen') {
			updateSidebar({ size: ThemeSettings.sidebar.size.default })
			document.getElementsByTagName('html')[0].classList.add('sidebar-enable')
		} else {
			updateSidebar({ size: ThemeSettings.sidebar.size.condensed })
		}
	}

	/**
	 * creates backdrop for leftsidebar
	 */
	function showLeftSideBarBackdrop() {
		const backdrop = document.createElement('div')
		backdrop.id = 'custom-backdrop'
		backdrop.className = 'offcanvas-backdrop fade show'
		document.body.appendChild(backdrop)

		backdrop.addEventListener('click', function () {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('sidebar-enable')
			hideLeftSideBarBackdrop()
		})
	}

	function hideLeftSideBarBackdrop() {
		const backdrop = document.getElementById('custom-backdrop')
		if (backdrop) {
			document.body.removeChild(backdrop)
			document.body.style.removeProperty('overflow')
		}
	}
	const { settings, updateSettings, updateSidebar } = useThemeContext()
	return (
		<>
			<div className="navbar-custom">
				<div className="topbar container-fluid">
					<div className="d-flex align-items-center gap-1">
						{/* Topbar Brand Logo */}
						<div className="logo-topbar">
							{/* Logo light */}
							<Link to="/" className="logo-light">
								<span className="logo-lg">
									<Image src={logo} alt="logo" />
								</span>
								<span className="logo-sm">
									<Image src={logoSm} alt="small logo" />
								</span>
							</Link>
							{/* Logo Dark */}
							<Link to="/" className="logo-dark">
								<span className="logo-lg">
									<img src={logo} alt="dark logo" />
								</span>
								<span className="logo-sm">
									<img src={logoSm} alt="small logo" />
								</span>
							</Link>
						</div>
						{/* Sidebar Menu Toggle Button */}
						<button
							className="button-toggle-menu"
							onClick={handleLeftMenuCallBack}
						>
							<i className="ri-menu-line" />
						</button>
						{/* Horizontal Menu Toggle Button */}
						<button
							className={`navbar-toggle ${navOpen ? 'open' : ''}`}
							data-bs-toggle="collapse"
							data-bs-target="#topnav-menu-content"
							onClick={toggleMenu}
						>
							<div className="lines">
								<span />
								<span />
								<span />
							</div>
						</button>
						{/* Topbar Search Form */}
						<div className="app-search d-none d-lg-block">
						</div>
					</div>
					<ul className="topbar-menu d-flex align-items-center gap-3">
						<li className="dropdown">
							<ProfileDropdown
								menuItems={profileMenus}
								userImage={profilePic}
								username="Admin"
							/>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Topbar
