import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const TomadoroMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Tomadoro" year="2022" />
				<Box mb={2}>
					<Tech color="red">Java</Tech>
					<Tech color="purple">FlatLeaf (Theme Lib)</Tech>
				</Box>
				<Paragraph>
					Desktop applicaton which helps students keep track of to-do tasks and help users stay out of
					distractions along with lo-fi music.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Source</Meta>
					<Link href="https://github.com/tientrinh21/Tomadoro" isExternal>
						https://github.com/tientrinh21/Tomadoro <ExternalLinkIcon ml="2px" />
					</Link>
				</Box>

				<WorkImage src="/tomadoro-1.png" alt="Tomadoro - 1" />
				<WorkImage src="/tomadoro-2.png" alt="Tomadoro - 2" />
				<WorkImage src="/tomadoro-3.png" alt="Tomadoro - 3" />
				<WorkImage src="/tomadoro-4.png" alt="Tomadoro - 4" />
			</Section>
		</Container>
	)
}

export default TomadoroMain
