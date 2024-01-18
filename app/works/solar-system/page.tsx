'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import SolarSystemMain from './solar-system-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<SolarSystemMain />

			<Footer />
		</>
	)
}

export default Works
