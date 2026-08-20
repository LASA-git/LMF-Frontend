import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import RouteScrollToTop from './components/RouteScrollToTop';
import Splash from './pages/Splash';
import ClinicPage from './pages/ClinicPage';
import SchedulePage from './pages/SchedulePage';
import PrivacyPage from './pages/PrivacyPage';

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
        <Route path="/en" element={<ClinicPage lang="en" />} />
        <Route path="/es" element={<ClinicPage lang="es" />} />
        <Route path="/en/schedule" element={<SchedulePage lang="en" />} />
        <Route path="/es/horario" element={<SchedulePage lang="es" />} />
        <Route path="/en/privacy" element={<PrivacyPage lang="en" />} />
        <Route path="/es/privacidad" element={<PrivacyPage lang="es" />} />
        <Route path="/english" element={<Navigate to="/en" replace />} />
        <Route path="/espanol" element={<Navigate to="/es" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
