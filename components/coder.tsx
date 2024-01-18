import { Box } from '@chakra-ui/react'
import { useRive } from '@rive-app/react-canvas'

export default function Coder() {
	const { rive, RiveComponent } = useRive({
		src: '../coder.riv',
		stateMachines: 'Default',
		autoplay: true,
	})

	return (
		<Box h="20rem" mb="-2em" mt="-3.5em">
			<RiveComponent />
		</Box>
	)
}
