import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';

const route = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={ route } />
	</StrictMode>,
);
