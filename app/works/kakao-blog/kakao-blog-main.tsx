import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const KakaoBlogMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Kakao Friends Blog" year="2020" />
				<Box mb={2}>
					<Tech color="orange">HTML</Tech>
					<Tech color="blue">CSS</Tech>
					<Tech color="yellow">JavaScript</Tech>
					<Tech color="pink">Hugo</Tech>
					<Tech color="cyan">Netlify CMS</Tech>
				</Box>
				<Paragraph>
					A blog build with JAM stack using Vanilla JS, Netlify CMS and Hugo (static site generator). The blog
					is suitable for a personal who wants to share about his/her experience in any aspect of life.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Website</Meta>
					<Link href="https://kakaofriends.netlify.app/" isExternal>
						https://kakaofriends.netlify.app/ <ExternalLinkIcon ml="2px" />
					</Link>
				</Box>
				<WorkImage src="/kakao-blog-1.png" alt="Kakao Friends Blog - 1" />
				<WorkImage src="/kakao-blog-2.jpg" alt="Kakao Friends Blog - 2" />
			</Section>
		</Container>
	)
}

export default KakaoBlogMain
