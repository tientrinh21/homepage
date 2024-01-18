import { Link } from '@chakra-ui/next-js'
import { Text, Heading, Box, Image, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

const Title = ({ title, year }: { title: string; year: string }) => (
	<Box>
		<Link href="/works">Works</Link> <ChevronRightIcon boxSize={6} pb={0.5} />{' '}
		<Heading display="inline-block" as="h3" fontSize={20} mb={0.5}>
			{title} <Badge>{year}</Badge>
		</Heading>
	</Box>
)

const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
	<Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

const Meta = ({ children }: { children: ReactNode }) => (
	<Badge colorScheme="green" mr={3}>
		{children}
	</Badge>
)

const Tech = ({ children, color }: { children: ReactNode; color: string }) => (
	<Badge colorScheme={color} mr={3} variant="solid">
		{children}
	</Badge>
)

const Paragraph = ({ children }: { children: ReactNode }) => (
	<Text as="p" textAlign="justify">
		{children}
	</Text>
)

export { Title, WorkImage, Meta, Tech, Paragraph }
