import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createReduxStore } from 'redux';

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
	const renderApp = (store = createReduxStore()) => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
	};
});

it('matches snapshot', () => {
	const renderApp = (store = createReduxStore()) => {
		const { asFragment } = render(
			<Provider store={store}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	};
});
