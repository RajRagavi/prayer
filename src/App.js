import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Locations from "./pages/Locations";
import Prayerpoints from "./pages/PrayerPoints";
import AddUser from "./pages/AddUser";
import AddPrayerpoints from "./pages/AddPrayerpoints";
import AddCategorys from "./pages/AddCategorys";
import AddLanguages from "./pages/AddLanguages";
import AddLocations from "./pages/AddLocations";
import AddRequestors from "./pages/AddRequestors";
import AddRoles from "./pages/AddRoles";
import AddStatus from "./pages/AddStatus";

import Reports from "./pages/Reports";
import Requestors from "./pages/Requestors";
import Roles from "./pages/Roles";
import Categorys from "./pages/Categorys";
import Languages from "./pages/Languages";
import Status from "./pages/Status";

import EditUser from "./pages/EditUser";
import EditPrayerpoints from "./pages/EditPoints";
import EditLanguages from "./pages/EditLanguages";
import EditCategorys from "./pages/EditCategorys";
import EditRoles from "./pages/EditRoles";
import EditLocations from "./pages/EditLocations";
import EditRequestors from "./pages/EditRequestors";
import EditStatus from "./pages/EditStatus";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/prayerpoints" element={<Prayerpoints />} />
          <Route path="/prayerpoints/add" element={<AddPrayerpoints />} />
          <Route path="/prayerpoints/edit/:id" element={<EditPrayerpoints />} />
          <Route path="/languages/edit/:id" element={<EditLanguages />} />
          <Route path="/categorys/edit/:id" element={<EditCategorys />} />
          <Route path="/locations/edit/:id" element={<EditLocations />} />
          <Route path="/roles/edit/:id" element={<EditRoles />} />
          <Route path="/requestors/edit/:id" element={<EditRequestors />} />
          <Route path="/prayerpoint_status/edit/:id" element={<EditStatus />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/add" element={<AddRoles />} />
          <Route path="/categorys" element={<Categorys />} />
          <Route path="/categorys/add" element={<AddCategorys />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/languages/add" element={<AddLanguages />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/add" element={<AddLocations />} />
          <Route path="/requestors" element={<Requestors />} />
          <Route path="/requestors/add" element={<AddRequestors />} />
          <Route path="/prayerpoint_status" element={<Status />} />
          <Route path="/prayerpoint_status/add" element={<AddStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
