'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import MongoDBBlogMain from './mongodb-blog-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<MongoDBBlogMain />

			<Footer />
		</>
	)
}

export default Works
