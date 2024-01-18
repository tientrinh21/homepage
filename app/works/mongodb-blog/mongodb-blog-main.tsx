import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const MongoDBBlogMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Blog with MongoDB" year="2021" />
				<Box mb={2}>
					<Tech color="green">Express.js</Tech>
					<Tech color="teal">MongoDB</Tech>
					<Tech color="yellow">EJS</Tech>
				</Box>
				<Paragraph>
					Desktop applicaton which helps students keep track of to-do tasks and help users stay out of
					distractions along with lo-fi music.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Source</Meta>
					<Link href="https://github.com/tientrinh21/blog-express" isExternal>
						https://github.com/tientrinh21/blog-express <ExternalLinkIcon ml="2px" />
					</Link>
				</Box>

				<WorkImage src="/mongodb-blog.png" alt="MongoDB Blog" />
			</Section>
		</Container>
	)
}

export default MongoDBBlogMain
