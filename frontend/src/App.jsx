import { Routes, Route } from 'react-router-dom';
import { TopBar } from '@dproano_npm/website-topbar';
import { Chess, NotFound } from './pages/index';

function App() {
	return (
		<div className="layout">
			<TopBar />
			<div className="content">
				<Routes>
					<Route path="/" element={<Chess />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
