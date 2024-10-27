import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { searchNews } from '../../actions/allNews';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectorPage } from '../../selectors/selectorNews';
import { setSearch } from '../../stores/newsSlice';
import style from '../../styles/Search.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey } from '@mui/material/colors';

const Search = () => {
	
	const [textInput, setText] = useState<string>('');
	const dispatch = useAppDispatch();
	const pageCurrent = useAppSelector<number>(selectorPage);
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
	};
	
	const handleClick = () => {
		if (textInput.trim()) {
			dispatch(setSearch(textInput));
			dispatch(searchNews({ text: textInput, page: pageCurrent }));
			setText(''); // Очищаем поле поиска
		}
	};
	
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleClick(); // Вызов функции поиска
		}
	};
	
	return (
		<div className={style.SearchWrapper}>
			<SearchIcon className={style.imgSearch} sx={{ color: blueGrey[900] }} />
			<TextField
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				value={textInput}
				className={style.input}
				id="standard-basic"
				label="Поиск новостей"
				variant="outlined"
				placeholder="Введите запрос..."
				sx={{ flexGrow: 1 }} // Заставляем TextField занимать всю доступную ширину
			/>
			<div>
				<Button onClick={handleClick} sx={{ backgroundColor: blueGrey[900], p: '15px 40px' }} variant="contained">
					Поиск
				</Button>
			</div>
		</div>
	);
};

export default Search;
