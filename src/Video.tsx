import {Composition} from 'remotion';
import './assets/font.css';
import {HelloWorld} from './HelloWorld';
import {WHITE_COLOR} from './HelloWorld/config';
import {Subtitle} from './HelloWorld/Subtitle';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={1800}
				fps={60}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Torvald',
					titleColor: WHITE_COLOR,
				}}
			/>
			<Composition
				id="Title"
				component={Subtitle}
				durationInFrames={100}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
