import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const PokedoroMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Pokedoro" year="2023" />
				<Box mb={2}>
					<Tech color="yellow">JavaScript</Tech>
					<Tech color="blue">NES.css</Tech>
					<Tech color="orange">Firebase</Tech>
				</Box>
				<Paragraph>
					Web app which keep track of todo tasks with Pomodoro technique. Instead of a boring to-do
					application, turning it into a game of catching Pokemon would make way more interesting.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Website</Meta>
					<Link href="https://poke-doro.web.app/" isExternal>
						https://poke-doro.web.app/ <ExternalLinkIcon ml="2px" />
					</Link>
				</Box>

				<WorkImage src="/pokedoro.jpg" alt="Pokedoro - 1" />
				<WorkImage src="/pokedoro-2.jpg" alt="Pokedoro - 2" />
				<WorkImage src="/pokedoro-3.jpg" alt="Pokedoro - 3" />
			</Section>
		</Container>
	)
}

export default PokedoroMain
