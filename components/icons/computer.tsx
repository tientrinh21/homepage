import { useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Player } from '@lordicon/react'

const ICON_LIGHT = require('@/public/computer-light.json')
const ICON_DARK = require('@/public/computer-dark.json')

const ComputerIcon = () => {
	const playerRef = useRef<Player>(null)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		playerRef.current?.playFromBeginning()
	}, [])

	useEffect(() => {
		isHovered && playerRef.current?.playFromBeginning()
	}, [isHovered])

	const onCompleteAnimation = () => {
		isHovered && playerRef.current?.playFromBeginning()
	}

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Player
				ref={playerRef}
				icon={useColorModeValue(ICON_LIGHT, ICON_DARK)}
				size={27}
				onComplete={onCompleteAnimation}
			/>
		</div>
	)
}

export default ComputerIcon
