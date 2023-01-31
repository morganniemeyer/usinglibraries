import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart.js';
import NewTable from './components/Table.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <NewTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
