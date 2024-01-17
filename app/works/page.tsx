'use client'

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { usePathname } from 'next/navigation'
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
