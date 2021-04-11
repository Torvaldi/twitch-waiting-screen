import {interpolate, useCurrentFrame} from 'remotion';
import {PRIMARY_COLOR, WHITE_COLOR} from './config';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				color: WHITE_COLOR,
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
				opacity,
			}}
		>
			Edit{' '}
			<code
				style={{
					color: PRIMARY_COLOR,
				}}
			>
				src/Video.tsx
			</code>{' '}
			and save to reload.
		</div>
	);
};
