import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoctorContextProvider } from "./assets/contexts/DoctorsContext";
import DefaultLayout from "./assets/layout/DefaultLayout";
import HomePage from "./assets/pages/HomePage";
import AddDoctorPage from "./assets/pages/AddDoctorPage";
import DetailDoctorPage from "./assets/pages/DetailDoctorPage";
import AdvanceDoctorSearchPage from "./assets/pages/AdvanceDoctorSearchPage";
import NotFoundPage from "./assets/pages/NotFoundPage";

export default function App() {
  return (
    <DoctorContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="doctors" element={<AdvanceDoctorSearchPage />} />
              <Route path="doctors/:id" element={<DetailDoctorPage />} />
              <Route path="doctors/add" element={<AddDoctorPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DoctorContextProvider>
  );
}
