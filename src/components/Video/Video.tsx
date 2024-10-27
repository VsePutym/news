import style from '../../styles/Video.module.scss'
const VideoComponent = () => {
	return (
		<div className={style.videoWrapper}>
			<div className={style.videoContainer}>
				<iframe
					width="1280"
					height="720"
					src="https://www.youtube.com/embed/1oO3GDAyHCc?autoplay=1&mute=1&loop=1&playlist=1oO3GDAyHCc&controls=0"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					title="YouTube Video"
				/>
				<div className={style.overlay}></div>
			</div>
		</div>
	);
};

export default VideoComponent;
