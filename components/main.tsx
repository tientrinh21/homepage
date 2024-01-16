import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	useColorModeValue,
} from '@chakra-ui/react'
import Section from './section'
import { ReactNode } from 'react'

const ProfileImage = ({ src, alt }: { src: string; alt: string }) => (
	<Image
		borderColor="whiteAlpha.800"
		borderWidth={2}
		borderStyle="solid"
		maxW="100px"
		display="inline-block"
		borderRadius="full"
		src={src}
		alt={alt}
	/>
)

const BriefIntro = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			borderRadius="lg"
			bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			textAlign="center"
			p={3}
			mb={6}
		>
			{children}
		</Box>
	)
}

const Main = () => {
	return (
		<Container as="main" pt={20}>
			<BriefIntro>
				Hello, I&apos;m a Software Engineering student based in South
				Korea!
			</BriefIntro>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2">Tien Trinh</Heading>
					<p>Student / Software Developer</p>
				</Box>

				<Flex
					flexShrink={0}
					mt={{ base: 6, md: 0 }}
					ml={{ md: 6 }}
					justifyContent="center"
				>
					<ProfileImage src="/me.jpg" alt="Profile Image" />
				</Flex>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nesciunt, quam earum architecto molestiae autem libero
					eveniet laboriosam dicta. Aliquam eaque nobis totam. Error
					deleniti nemo voluptatum quod iste, aliquid totam?
				</p>
			</Section>
		</Container>
	)
}
export default Main
