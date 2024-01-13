'use client'

import { Container, Box, Heading } from '@chakra-ui/react'
import NavBar from '@/components/navbar'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Home() {
	const path = usePathname()

	return (
		<Box as="main" pb={8}>
			<NavBar path={path} />

			<Container maxW="md" pt={14}>
				<Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
					Hello, I&apos;m a student major in software based in South
					Korea!
				</Box>

				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Tien Trinh
						</Heading>
						<p>Student / Software Developer</p>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
