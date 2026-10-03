import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import RouteScrollToTop from './components/RouteScrollToTop';
import Splash from './pages/Splash';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import PartnersPage from './pages/PartnersPage';
import ClinicPage from './pages/ClinicPage';
import DonatePage from './pages/DonatePage';
import SchedulePage from './pages/SchedulePage';
import ScheduleEventPage from './pages/ScheduleEventPage';
import ScheduleLookupPage from './pages/ScheduleLookupPage';
import PrivacyPage from './pages/PrivacyPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminEventsPage from './pages/admin/AdminEventsPage';

function DocumentLang() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = pathname.startsWith('/es') ? 'es' : 'en';
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <DocumentLang />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/en" element={<AboutPage lang="en" />} />
        <Route path="/es" element={<AboutPage lang="es" />} />
        <Route path="/en/team" element={<TeamPage lang="en" />} />
        <Route path="/es/equipo" element={<TeamPage lang="es" />} />
        <Route path="/en/partners" element={<PartnersPage lang="en" />} />
        <Route path="/es/aliados" element={<PartnersPage lang="es" />} />
        <Route path="/en/clinic" element={<ClinicPage lang="en" />} />
        <Route path="/es/clinica" element={<ClinicPage lang="es" />} />
        <Route path="/en/contact" element={<Navigate to="/en/donate#contact" replace />} />
        <Route path="/es/contacto" element={<Navigate to="/es/donar#contact" replace />} />
        <Route path="/en/donate" element={<DonatePage lang="en" />} />
        <Route path="/es/donar" element={<DonatePage lang="es" />} />
        <Route path="/en/schedule" element={<SchedulePage lang="en" />} />
        <Route path="/en/schedule/lookup" element={<ScheduleLookupPage lang="en" />} />
        <Route path="/en/schedule/:eventId" element={<ScheduleEventPage lang="en" />} />
        <Route path="/es/horario" element={<SchedulePage lang="es" />} />
        <Route path="/es/horario/consulta" element={<ScheduleLookupPage lang="es" />} />
        <Route path="/es/horario/:eventId" element={<ScheduleEventPage lang="es" />} />
        <Route path="/en/privacy" element={<PrivacyPage lang="en" />} />
        <Route path="/es/privacidad" element={<PrivacyPage lang="es" />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminEventsPage />} />
        </Route>
        <Route path="/english" element={<Navigate to="/en" replace />} />
        <Route path="/espanol" element={<Navigate to="/es" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
