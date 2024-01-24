import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorksGridItem } from '@/components/grid-item'
import { Section, SectionTitle } from '@/components/section'
import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

import thumbnailPokedoro from '@/public/pokedoro.jpg'
import thumbnailKakaoBlog from '@/public/kakao-blog.png'
import thumbnailBudgetPokemonGo from '@/public/budget-pokemon-go.png'
import thumbnailTomadoro from '@/public/tomadoro.png'
import thumbnailSolarSystem from '@/public/solar-system.png'
import thumbnailMongoDBBlock from '@/public/mongodb-blog.png'

const WorksMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<SectionTitle>Works</SectionTitle>
			</Section>

			<SimpleGrid columns={[1, 2, 2]} gap={6}>
				<WorksGridItem id="pokedoro" title="Pokedoro" thumbnail={thumbnailPokedoro}>
					Web app which keep track of todo tasks and let students focus on studying with Pomodoro method
				</WorksGridItem>
				<WorksGridItem id="budget-pokemon-go" title="Budget Pokemon Go" thumbnail={thumbnailBudgetPokemonGo}>
					A budget clone version of Pokémon Go game
				</WorksGridItem>
				<WorksGridItem id="tomadoro" title="Tomadoro" thumbnail={thumbnailTomadoro} delay={0.1}>
					Desktop application keeps track of to-do tasks, and help users stay out of distractions along with
					lo-fi music.
				</WorksGridItem>
				<WorksGridItem id="kakao-blog" title="Kakao Friends Blog" thumbnail={thumbnailKakaoBlog} delay={0.1}>
					Blog built with JAM stack using Vanilla JS, Netlify CMS and Hugo (static site generator)
				</WorksGridItem>
			</SimpleGrid>

			<Section delay={0.2}>
				<Divider mt={4} mb={8} />
				<SectionTitle>Deprecated works</SectionTitle>
			</Section>

			<SimpleGrid columns={[1, 2, 2]} gap={6}>
				<WorksGridItem
					id="mongodb-blog"
					title="Blog with MongoDB"
					thumbnail={thumbnailMongoDBBlock}
					delay={0.3}
				>
					The blog where many users can participate and share their own ideas in any aspects as well as
					discussing with each others.
				</WorksGridItem>
				<WorksGridItem id="solar-system" title="Solar System" thumbnail={thumbnailSolarSystem} delay={0.3}>
					3D simulation of the solar system
				</WorksGridItem>
			</SimpleGrid>
		</Container>
	)
}

export default WorksMain
