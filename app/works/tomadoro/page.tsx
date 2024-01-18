'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import TomadoroMain from './tomadoro-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<TomadoroMain />

			<Footer />
		</>
	)
}

export default Works
