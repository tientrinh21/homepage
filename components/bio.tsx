import { Box, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

const BioSection = ({ children }: { children: ReactNode }) => (
	<Flex>{children}</Flex>
)

const BioYear = ({ children }: { children: ReactNode }) => (
	<Text fontWeight="bold" mr={5} display="inline-block" minW={28}>
		{children}
	</Text>
)

export { BioSection, BioYear }
