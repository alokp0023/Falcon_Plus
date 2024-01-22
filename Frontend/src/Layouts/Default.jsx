import { Suspense, useEffect } from 'react'
import { useThemeContext } from '../common/context'

// utils
import { changeHTMLAttribute } from '../utils'

const loading = () => {
	console.log('fallback arrived')
	return <></>
}

const DefaultLayout = ({ children }) => {
	const { settings } = useThemeContext()

	useEffect(() => {
		changeHTMLAttribute('data-bs-theme', settings.theme)
	}, [settings.theme])

	return <Suspense fallback={loading()}>{children}</Suspense>
}

export default DefaultLayout
