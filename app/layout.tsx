import type { Metadata } from 'next'
import { Providers } from './providers'
import { fonts } from './fonts'

export const metadata: Metadata = {
	title: 'Tien Trinh',
	description: 'My personal website',
	icons: {
		icon: '/icon.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={fonts.mPlusRounded.variable}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
