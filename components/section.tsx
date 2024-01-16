import { MotionConfig, motion } from 'framer-motion'
import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

const MotionBox = motion<BoxProps>(Box)

const Section = ({
	children,
	delay = 0,
}: {
	children: ReactNode
	delay: number
}) => (
	<MotionBox
		initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 100, transition: { duration: 0.8, delay } }}
		mb={6}
	>
		{children}
	</MotionBox>
)

export default Section
