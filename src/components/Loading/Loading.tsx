import Box from '@mui/material/Box'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import style from '../../styles/News.module.scss'

const Loading = () => {
	return (
		<Box className={style.loadingWrapper}>
		<div>	<p>loading....</p></div>
			<CircularProgress size={100} />
		</Box>
	)
}

export default Loading