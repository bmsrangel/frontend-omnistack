import React from 'react';
import './App.css';
// import Main from './pages/Main';
import Routes from './routes';

// Como o App não possui state, ele pode ser escrito na forma de função

// function App() {
// 	return <Main />;
// }

const App = () => <Routes />;

// class App extends Component {
// 	render() {
// 		return <Main />;
// 	}
// }

export default App;
