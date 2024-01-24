import { motion } from 'framer-motion'
import { Box, BoxProps, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

const MotionBox = motion<BoxProps>(Box)

const SectionTitle = ({ children }: { children: ReactNode }) => (
	<Heading
		as="h3"
		textDecoration="underline"
		fontSize={20}
		textUnderlineOffset={6}
		textDecorationColor="#525252"
		textDecorationThickness="4px"
		mt={3}
		mb={4}
	>
		{children}
	</Heading>
)

const Section = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
	<MotionBox
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 100, transition: { duration: 0.8, delay } }}
		mb={6}
	>
		{children}
	</MotionBox>
)

export { Section, SectionTitle }
