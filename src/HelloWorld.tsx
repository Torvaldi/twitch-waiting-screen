import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {BACKGROUND_COLOR_DARK} from './HelloWorld/config';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 0;

	return (
		<div style={{flex: 1, backgroundColor: BACKGROUND_COLOR_DARK}}>
			<div style={{opacity}}>
				<Sequence from={transitionStart} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 60} durationInFrames={Infinity}>
					<Subtitle />
				</Sequence>
			</div>
		</div>
	);
};
