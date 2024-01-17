import { Link } from '@chakra-ui/next-js'
import {
	Text,
	LinkBox,
	LinkOverlay,
	Image,
	Card,
	CardBody,
	Box,
} from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import { Section } from './section'
import { ReactNode } from 'react'

const WorksGridItem = ({
	children,
	id,
	title,
	thumbnail,
	delay = 0,
}: {
	children: ReactNode
	id: string
	title: string
	thumbnail: StaticImageData
	delay?: number
}) => (
	<Section delay={delay}>
		<Card textAlign="justify" size="lg" h="full">
			<CardBody
				as={LinkBox}
				cursor="pointer"
				h="full"
				display="flex"
				flexDirection="column"
				gap={5}
			>
				<Box minH="130px">
					<Image src={thumbnail.src} alt={title} borderRadius="lg" />
				</Box>
				<Box>
					<LinkOverlay as={Link} href={`/works/${id}`} isExternal>
						<Text
							mb={1}
							fontSize="lg"
							letterSpacing="wide"
							fontWeight="medium"
						>
							{title}
						</Text>
					</LinkOverlay>
					<Text fontSize="sm">{children}</Text>
				</Box>
			</CardBody>
		</Card>
	</Section>
)

export { WorksGridItem }
