import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "./Pages/Admin";
import MyInventory from "./Pages/MyInventory";
import NewRegistration from "./Pages/NewRegestration";
import Reports from "./Pages/Reports";
import ManageUser from "./Pages/ManageUser";
import StockTransfer from "./Pages/StockTransfer";
import ManageContent from "./Pages/ManageContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/MyInventory" element={<MyInventory />} />
        <Route path="/NewRegistration" element={<NewRegistration />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/ManageUser" element={<ManageUser />} />
        <Route path="/StockTransfer" element={<StockTransfer />} />
        <Route path="/ManageContent" element={<ManageContent />} />
      </Routes>
    </Router>
  )
}

export default App;
