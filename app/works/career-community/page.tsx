'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import CareerCommunityMain from './career-community-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<CareerCommunityMain />

			<Footer />
		</>
	)
}

export default Works
