import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "./Pages/Admin";
import MyInventory from "./Pages/MyInventory";
import NewRegistration from "./Pages/NewRegestration";
import Reports from "./Pages/Reports";
import ManageUser from "./Pages/ManageUser";
import StockTransfer from "./Pages/StockTransfer";
import ManageContent from "./Pages/ManageContent";
import { Login } from './Pages/Login';
import { Root } from './Pages/Root';
import { Otp } from './Pages/Otp';

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
        <Route path="/StockTransfer" element={<StockTransfer />} />
        <Route path="/ManageContent" element={<ManageContent />} />
        <Route path="/MyInventory" element={<MyInventory/>}/>
      </Routes>
    </Router>
  )
}

export default App;
