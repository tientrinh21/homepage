import { Container, Link, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Tech, Paragraph } from '@/components/work'
import { Section } from '@/components/section'

import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

const CareerCommunityMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<Title title="Career Community" year="2022" />
				<Box mb={2}>
					<Tech color="cyan">React Native</Tech>
					<Tech color="yellow">AWS</Tech>
					<Tech color="green">Django</Tech>
					<Tech color="blue">PosgreSQL</Tech>
				</Box>
				<Paragraph>
					Career Community is a service for SKKU Software Student that uses various human networks including
					students, graduates, and professors in Sungkyunkwan University's software department to share
					various and reliable career information, e.g., department announcements, internships, and external
					recruitment announcements. This will give college students convenience to develop their personalized
					careers.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Box mb={4}>
					<Meta>Presentation</Meta>
					<Link
						href="https://docs.google.com/presentation/d/1OPhLbgeF8kfhb-Zi_Bps8Ca4a8QCFrcczb6NzCxgpXc/view"
						isExternal
					>
						Software Engineering - Team 9 <ExternalLinkIcon ml="2px" />
					</Link>
					<br />
					<Meta>Skill</Meta>
					<Link href="https://drawsql.app/teams/tien-trinh/diagrams/career-community-for-skku" isExternal>
						Developing Database & API
					</Link>
					,{' '}
					<Link
						href="https://drive.google.com/drive/folders/1zWPgzAZxZ6Y3bYsZlwdf7hvgGwrgojVM?usp=sharing"
						isExternal
					>
						Writing Documents
					</Link>
				</Box>

				<WorkImage src="/career-community.png" alt="Career Community - 1" />
				<WorkImage src="/career-community-2.png" alt="Career Community - 2" />
				<WorkImage src="/career-community-3.png" alt="Career Community - 3" />
			</Section>
		</Container>
	)
}

export default CareerCommunityMain
