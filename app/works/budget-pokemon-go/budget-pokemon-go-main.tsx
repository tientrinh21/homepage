import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const BudgetPokemonGoMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Budget Pokemon Go" year="2023" />
				<Box mb={2}>
					<Tech color="purple">Kotlin</Tech>
					<Tech color="green">Google Maps Platform</Tech>
					<Tech color="red">PokeAPI</Tech>
				</Box>
				<Paragraph>
					A clone version of Pokémon Go game. No in-app purchase, no microtransaction, just purely for
					entertainment and improving your Pokemon understanding 😁.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Source</Meta>
					<Link href="https://github.com/tientrinh21/PokemonGo" isExternal>
						https://github.com/tientrinh21/PokemonGo <ExternalLinkIcon ml="2px" />
					</Link>
				</Box>
				<WorkImage src="/budget-go-1.png" alt="Budget Pokemon Go - 1" />
				<WorkImage src="/budget-go-2.png" alt="Budget Pokemon Go - 2" />
			</Section>
		</Container>
	)
}

export default BudgetPokemonGoMain
