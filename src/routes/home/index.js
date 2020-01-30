import { h } from 'preact';
import style from './style';
import { DateDisplay } from '../../components/amp-date-display/0.2/date-display';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<DateDisplay
			timestampSeconds="2147483648"
			layout="fixed-height"
			height="20"
			render={({ iso }) => <span>{`Y2K38 will be at ${iso}`}</span>}
		/>
	</div>
);

export default Home;
