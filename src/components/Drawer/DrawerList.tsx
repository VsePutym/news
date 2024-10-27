import { Button } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { searchNews } from '../../actions/allNews';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectorPage } from '../../selectors/selectorNews';
import { setSearch } from '../../stores/newsSlice';
import typesNews from '../../types/category';


interface DrawerListProps {
	onClose: () => void; // Определяем тип для onClose
}

const DrawerList: React.FC<DrawerListProps> = ({ onClose }) => {
	
	const dispatch = useAppDispatch();
	const pageCurrent = useAppSelector(selectorPage);
	
	const handleClick = (str: typesNews) => {
		dispatch(searchNews({ text: str, page: pageCurrent }));
		dispatch(setSearch(str));
		onClose(); // Закрываем меню при нажатии кнопки
	};
	
	return (
		<Box sx={{ width: 300, textAlign: 'end', pr: '30px' }}>
			<Box sx={{ p: '30px' }}>
				<h2>Меню</h2>
			</Box>
			<Divider />
			<ul>
				{Object.values(typesNews).map((type) => (
					<div key={type}>
						<Button
							variant="text"
							sx={{ color: '#263238', fontSize: '20px', mb: '30px' }}
							onClick={() => handleClick(type)}
						>
							{type}
						</Button>
					</div>
				))}
			</ul>
		</Box>
	);
};

export default DrawerList;
