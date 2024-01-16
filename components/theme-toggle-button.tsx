import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<AnimatePresence>
			<IconButton
				aria-label="Toggle theme"
				colorScheme={useColorModeValue('purple', 'orange')}
				icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
				onClick={toggleColorMode}
				borderRadius="lg"
			/>
		</AnimatePresence>
	)
}

export default ThemeToggleButton
