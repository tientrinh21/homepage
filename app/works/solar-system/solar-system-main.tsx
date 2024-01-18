import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const SolarSystemMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Solar System" year="2023" />
				<Box mb={2}>
					<Tech color="blue">C++</Tech>
					<Tech color="gray">OpenGL</Tech>
				</Box>
				<Paragraph>3D simulation of the solar system</Paragraph>
			</Section>

			<Section delay={0.1}>
				<WorkImage src="/solar-system.png" alt="Solar System" />
			</Section>
		</Container>
	)
}

export default SolarSystemMain
