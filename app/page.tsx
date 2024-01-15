'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Main from '@/components/main'
import Footer from '@/components/footer'

export default function Home() {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<Main />

			<Footer />
		</>
	)
}
