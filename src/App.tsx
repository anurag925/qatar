import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from "./Pages/Admin";
import MyInventory from "./Pages/MyInventory";
import NewRegistration from "./Pages/NewRegestration";
import Reports from "./Pages/Reports";
import ManageUser from "./Pages/ManageUser";
import ManageContent from "./Pages/ManageContent";
import { Login } from './Pages/Login';
import { Root } from './Pages/Root';
import { Otp } from './Pages/Otp';
import StockTransferNew from './Pages/StockTransferNew';

function App() {
  const token = localStorage.getItem('user_token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        {token ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<NewRegistration />} />
            <Route path="/myinventory" element={<MyInventory />} /> 
            <Route path="/reports" element={<Reports />} />
            <Route path="/manageUser" element={<ManageUser />} />
            <Route path="/stock-transfer-new" element={<StockTransferNew />} />
            <Route path="/manageContent" element={<ManageContent />} /> 
          </>
        ) : (
          <Route path="/" element={<Root />} />
        )}
      </Routes>
    </Router>
  )
}

export default App;
