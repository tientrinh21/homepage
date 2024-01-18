import { Box, Text } from '@chakra-ui/react'

const Footer = () => (
	<Box as="footer" opacity={0.4} textAlign="center" fontSize="sm" my={8}>
		<Text>&copy; {new Date().getFullYear()} Tien Trinh</Text>

		<Text mt={1}>
			Heavily inspired by{' '}
			<a href="https://www.craftz.dog/" target="_blank">
				devaslife
			</a>
			. Icons by <a href="https://lordicon.com/">lordicon</a>
		</Text>
	</Box>
)

export default Footer
