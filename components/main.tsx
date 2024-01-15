import { Box, Container, Heading } from '@chakra-ui/react'

const Main = () => {
	return (
		<Container as="main" pt={20}>
			<Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
				Hello, I&apos;m a student major in software based in South
				Korea!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2">Tien Trinh</Heading>
					<p>Student / Software Developer</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Main
