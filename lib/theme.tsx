import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props),
		},
	}),
}

// Add new variants
const components = {
	Link: {
		baseStyle: (props: StyleFunctionProps) => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			_hover: {
				textDecorationStyle: 'dotted',
				textUnderlineOffset: 5,
			},
		}),
	},
}

const fonts = {
	heading: 'var(--font-mplus), sans-serif',
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts })
export default theme
