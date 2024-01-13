import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tien Trinh - Hompage',
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
	const a = 10
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
				<Script
					src="https://cdn.lordicon.com/lordicon.js"
					strategy="beforeInteractive"
				/>
			</body>
		</html>
	)
}
