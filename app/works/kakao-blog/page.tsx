'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import KakaoBlogMain from './kakao-blog-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<KakaoBlogMain />

			<Footer />
		</>
	)
}

export default Works
