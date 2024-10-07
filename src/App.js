import './App.css';
import Layout from './Layout';
import POSPage from './POSPage';
import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to="/pos" />} />
            <Route path="/pos" element={<POSPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
