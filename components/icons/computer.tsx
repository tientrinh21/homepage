import { useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Player } from '@lordicon/react'

const ICON = require('@/public/computer-light.json')

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
				icon={ICON}
				size={25}
				colorize={useColorModeValue(undefined, '#fff')}
				onComplete={onCompleteAnimation}
			/>
		</div>
	)
}

export default ComputerIcon
