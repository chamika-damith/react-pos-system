import './App.css';
import ItemsPage from './ItemsPage';
import Layout from './Layout';
import POSPage from './POSPage';
import CategoriesPage from './CategoriesPage';
import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import StockManagementPage from './StockManagementPage';


function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
        <Routes>
            <Route path="/" element={<Navigate to="/pos" />} />
            <Route path="/pos" element={<POSPage />} />
            <Route path="/ItemsPage" element={<ItemsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/stock" element={<StockManagementPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
