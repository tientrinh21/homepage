'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import HomeMain from './home-main'

const Home = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<HomeMain />

			<Footer />
		</>
	)
}

export default Home
