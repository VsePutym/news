import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { useEffect, useRef } from 'react'
import { hotNews, searchNews } from '../../actions/allNews'
import Loading from '../../components/Loading/Loading'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { newsSelectors } from '../../selectors/selectorNews'
import { setSearch } from '../../stores/newsSlice'
import style from '../../styles/News.module.scss'

const News = () => {
	const news = useAppSelector(newsSelectors.allNews)
	const pageCurrent = useAppSelector(newsSelectors.page)
	const searchName = useAppSelector(newsSelectors.search)
	const status = useAppSelector(newsSelectors.status)
	const dispatch = useAppDispatch()
	

	const isRequestSent = useRef(false)
	
	useEffect(() => {
		if (news.length === 0 && !isRequestSent.current) {
			dispatch(hotNews({ page: pageCurrent }))
			isRequestSent.current = true
			dispatch(setSearch('новости'))
		}
	}, [pageCurrent, news.length, dispatch])
	
	const handleClick = () => {
		dispatch(searchNews({ text: searchName, page: pageCurrent }))
	}
	
	const handleCardClick = (url: string) => {
		window.open(url, '_blank')
	}
	
	return (
		<div className={style.newsContainer}>
			{news.length === 0 && (
			<Loading />
			)}
			<div className={style.newsList}>
				{news.map((item, index) => (
					<div className={style.newsItem} key={`${item.title}-${index}`} onClick={() => handleCardClick(item.url)}>
						{item.urlToImage ? (
							<img className={style.img} src={item.urlToImage} alt='img' />
						) : (
							<img className={style.img}
							     src='https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE='
							     alt='img' />
						)}
						<h3 className={style.newsTitle}>{item.title}</h3>
						<p className={style.description}>{item.description}</p>
					</div>
				))}
			</div>
			{news.length > 0 && (
				<Button disabled={status} onClick={handleClick} sx={{ backgroundColor: blueGrey[900], mt: '50px', mb: '50px' }}
				        variant='contained'>
					Показать еще
				</Button>
			)}
		</div>
	)
}

export default News
