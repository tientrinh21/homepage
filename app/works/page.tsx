'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import WorksMain from './works-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<WorksMain />

			<Footer />
		</>
	)
}

export default Works
