'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import BudgetPokemonGoMain from './budget-pokemon-go-main'

const Works = () => {
	const path = usePathname()

	return (
		<>
			<NavBar path={path} />

			<BudgetPokemonGoMain />

			<Footer />
		</>
	)
}

export default Works
