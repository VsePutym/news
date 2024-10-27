import { useEffect } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { blueGrey } from '@mui/material/colors';
import DrawerList from '../../components/Drawer/DrawerList';
import Logo from '../../img/logo/Logo2.png';
import style from '../../styles/Header.module.scss';
import Drawer from '@mui/material/Drawer';
import ForumIcon from '@mui/icons-material/Forum';
import GoogleIcon from '@mui/icons-material/Google';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu'; // Импортируем иконку меню

const Header = () => {
	const [open, setOpen] = React.useState(false);
	
	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen)
	};
	
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				className={style.appBar}
				position='fixed'
				sx={{ backgroundColor: blueGrey[900], alignItems: 'center' }}
			>
				<Toolbar>
					<Box className={style.wrapperLogo}>
						<div className={style.wrapperTitle}>
							<img className={style.Logo} src={Logo} alt='logo' /> {/* Добавляем картинку логотипа */}
							<h1 className={style.mainTitle}>URBAN NEWS TODAY</h1>
						</div>
						<Box className={style.navIcons}>
							<GoogleIcon className={style.icon} />
							<GppGoodIcon className={style.icon} />
							<PersonIcon className={style.icon} />
							<BrightnessMediumIcon className={style.icon} />
						</Box>
						<div onClick={toggleDrawer(true)} className={style.wrapperMenu}>
							<MenuIcon sx={{ fontSize: '30px', color: 'white' }} />
						</div>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
				<DrawerList onClose={toggleDrawer(false)} /> {/* Передаём функцию закрытия */}
			</Drawer>
		</Box>
	);
};

export default Header;
