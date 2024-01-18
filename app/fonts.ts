import { M_PLUS_Rounded_1c } from 'next/font/google'

const mPlusRounded = M_PLUS_Rounded_1c({
	weight: ['300', '700'],
	subsets: ['latin'],
	variable: '--font-mplus',
	// display: 'swap',
	// adjustFontFallback: false,
})

export const fonts = {
	mPlusRounded,
}
