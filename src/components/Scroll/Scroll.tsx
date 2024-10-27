import { Fab } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { useEffect, useState } from 'react'
import style from './ScrollToTop.module.scss' // Можно подключить свой модуль стилей

const ScrollToTop = () => {
	const [showButton, setShowButton] = useState(false)
	
	// Показать кнопку, если прокручено вниз на определенное расстояние
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 300) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	
	return (
		<>
			{showButton && (
				<Fab
					onClick={scrollToTop}
					sx={{
						position: 'fixed',
						bottom: '30px',
						right: '30px',
						backgroundColor: '#263238', // Цвет заливки
						color: 'white', // Цвет стрелочки
						'&:hover': {
							backgroundColor: '#37474f', // Цвет при наведении
						},
					}}
				>
					<ArrowUpwardIcon />
				</Fab>
			)}
		</>
	)
}

export default ScrollToTop
