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
import { Section, SectionTitle } from '../components/section'
import { ReactNode } from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear, BioInfo } from '../components/bio'
import dynamic from 'next/dynamic'

// Lazy load with no server-side
const Coder = dynamic(() => import('@/components/coder'))

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

const Info = ({ children }: { children: ReactNode }) => (
	<Text textAlign="justify" letterSpacing="wide">
		{children}
	</Text>
)

const HomeMain = () => {
	return (
		<Container as="main" pt={20} maxW="95%" w="container.sm">
			<Coder />

			<Section>
				<BriefIntro>Hello, I&apos;m a Computer Science student based in South Korea!</BriefIntro>

				<Box display={{ sm: 'flex' }} mb={6}>
					<Flex flexGrow={1} direction="column" justifyContent="center">
						<Heading as="h2">Tien Trinh</Heading>
						<Info>Student / Developer</Info>
					</Flex>

					<Flex flexShrink={0} mt={{ base: 6, sm: 0 }} ml={{ sm: 6 }} justifyContent="center">
						<ProfileImage src="/me.jpg" alt="Profile Image" />
					</Flex>
				</Box>
			</Section>

			<Section delay={0.1}>
				<SectionTitle>👋 About</SectionTitle>
				<Info>
					I'm a motivated computer science student who passionate about building applications for people to
					elevate their works, especially students. I would love to work on a team in order to build a
					large-scale application which bring a better value for people's value to the wider public. Check out
					my personal project <Link href="/works/pokedoro">Pokedoro</Link> which help young age students stay
					focused.
				</Info>
				<Flex justifyContent="center" my={6} gap={{ base: 2, md: 4 }}>
					<Link href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							Works
						</Button>
					</Link>
					<Link href="https://drive.google.com/file/d/1E6zj39eKiCS-CSJp0V5dtTU6rpVaa5gN/view" isExternal>
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							Resume
						</Button>
					</Link>
				</Flex>
			</Section>

			<Section delay={0.2}>
				<SectionTitle>🏢 Experience</SectionTitle>
				<BioSection>
					<BioYear>01 - 07 / 2023</BioYear>
					<BioInfo>
						Intern as Software Developer at{' '}
						<Link href={'http://toba.kr/?page_id=984'} isExternal>
							Toba Company Ltd.
						</Link>
					</BioInfo>
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<SectionTitle>📝 Bio</SectionTitle>
				<BioSection>
					<BioYear>2020 - 2021</BioYear>
					<BioInfo>
						Bachelor of Computer Science in{' '}
						<Link href="https://hcmut.edu.vn/en" isExternal>
							Ho Chi Minh University of Technology
						</Link>
					</BioInfo>
				</BioSection>
				<BioSection>
					<BioYear>2021 - Present</BioYear>
					<BioInfo>
						Bachelor of Computer Science and Engineering in{' '}
						<Link href="https://www.skku.edu/eng/" isExternal>
							Sungkyunkwan University
						</Link>
					</BioInfo>
				</BioSection>
			</Section>

			<Section delay={0.4}>
				<SectionTitle>💻 Skill</SectionTitle>
				<UnorderedList letterSpacing="wide" display="flex" flexDirection="column" gap={2}>
					<ListItem>Hi</ListItem>
				</UnorderedList>
			</Section>

			<Section delay={0.5}>
				<SectionTitle>⏰ Hobby</SectionTitle>
				<UnorderedList letterSpacing="wide" display="flex" flexDirection="column" gap={2}>
					<ListItem>
						Books -{' '}
						<Link href="https://www.goodreads.com/book/show/8686068-the-devotion-of-suspect-x" isExternal>
							The Devotion of Suspect X
						</Link>
						{', '}
						<Link href="https://www.goodreads.com/book/show/13079982-fahrenheit-451" isExternal>
							Fahrenheit 451
						</Link>
					</ListItem>
					<ListItem>
						Movies -{' '}
						<Link href="https://www.imdb.com/title/tt5311514/" isExternal>
							Your Name
						</Link>
						{', '}
						<Link href="https://www.imdb.com/title/tt2119532/" isExternal>
							Hacksaw Ridge
						</Link>
					</ListItem>
					<ListItem>Badminton 🏸</ListItem>
				</UnorderedList>
			</Section>
		</Container>
	)
}
export default HomeMain
