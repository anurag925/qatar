import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "./pages/Admin";
import MyInventory from "./pages/MyInventory";
import NewRegistration from "./pages/NewRegestration";
import Reports from "./pages/Reports";
import ManageUser from "./pages/ManageUser";
import StockTransfer from "./pages/StockTransfer";
import ManageContent from "./pages/ManageContent";
import { Login } from './pages/Login';
import { Root } from './pages/Root';
import { Otp } from './pages/Otp';
import StockTransferNew from './pages/StockTransferNew';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<NewRegistration />} />
        <Route path="/MyInventory" element={<MyInventory />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/ManageUser" element={<ManageUser />} />
        <Route path="/stock-transfer" element={<StockTransfer />} />
        <Route path="/stock-transfer-new" element={<StockTransferNew />} />
        <Route path="/ManageContent" element={<ManageContent />} />
        <Route path="/MyInventory" element={<MyInventory/>}/>
      </Routes>
    </Router>
  )
}

export default App;
