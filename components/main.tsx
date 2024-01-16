import {
	Button,
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
	useColorModeValue,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Section, SectionTitle } from './section'
import { ReactNode } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from './bio'

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
			py={3}
			px={5}
			mb={6}
			letterSpacing="wide"
		>
			{children}
		</Box>
	)
}

const Paragraph = ({ children }: { children: ReactNode }) => (
	<Text textAlign="justify" letterSpacing="wide">
		{children}
	</Text>
)

const Main = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="xl">
			<BriefIntro>
				Hello, I&apos;m a Computer Science student based in South Korea!
			</BriefIntro>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2">Tien Trinh</Heading>
					<Paragraph>Student / Software Developer</Paragraph>
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
				<SectionTitle>👋 About</SectionTitle>
				<Paragraph>
					I'm a motivated computer science student who passionate
					about staying updated with emerging technologies, with
					hands-on experience in developing and optimizing software
					solutions. I seek to leverage my technical skills and
					innovative mindset to contribute to a dynamic tech team and
					drive meaningful technological advancements. Check out my
					personal project{' '}
					<Link href="/works/pokedoro">Pokedoro</Link> which help
					young students stay focused.
				</Paragraph>
				<Flex justifyContent="center" my={6} gap={{ base: 2, md: 4 }}>
					{/* TODO */}
					{/* <Link href="/works">
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Works
						</Button>
					</Link> */}
					<Link
						href="https://drive.google.com/file/d/1E6zj39eKiCS-CSJp0V5dtTU6rpVaa5gN/view"
						isExternal
					>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme="teal"
						>
							Resume
						</Button>
					</Link>
				</Flex>
			</Section>

			<Section delay={0.2}>
				<SectionTitle>📄 Bio</SectionTitle>
				<BioSection>
					<BioYear>2016 - 2019</BioYear>
					<Paragraph>
						Ly Tu Trong High Schools for the Gifted - Vietnam
					</Paragraph>
				</BioSection>
				<BioSection>
					<BioYear>2021 - Present</BioYear>
					<Paragraph>
						Bachelor of Computer Science and Engineering in{' '}
						<Link
							href="https://www.topuniversities.com/universities/sungkyunkwan-universityskku"
							isExternal
						>
							Sungkyunkwan University
						</Link>{' '}
					</Paragraph>
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<SectionTitle>⏲️ Hobby</SectionTitle>
				<UnorderedList letterSpacing="wide">
					<ListItem>
						Books -{' '}
						<Link
							href="https://www.goodreads.com/book/show/8686068-the-devotion-of-suspect-x"
							isExternal
						>
							The Devotion of Suspect X
						</Link>
						{', '}
						<Link
							href="https://www.goodreads.com/book/show/13079982-fahrenheit-451"
							isExternal
						>
							Fahrenheit 451
						</Link>
					</ListItem>
					<ListItem>
						Movies -{' '}
						<Link
							href="https://www.imdb.com/title/tt5311514/"
							isExternal
						>
							Your Name
						</Link>
						{', '}
						<Link
							href="https://www.imdb.com/title/tt2119532/"
							isExternal
						>
							Hacksaw Ridge
						</Link>
					</ListItem>
					<ListItem>Badminton 🏸</ListItem>
				</UnorderedList>
			</Section>
		</Container>
	)
}
export default Main
