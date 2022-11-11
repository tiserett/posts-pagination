import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import 'bulma/css/bulma.min.css';

import { App } from './App';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Root />);
