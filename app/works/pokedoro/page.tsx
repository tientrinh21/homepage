'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import PokedoroMain from './pokedoro-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<PokedoroMain />

			<Footer />
		</>
	)
}

export default Works
