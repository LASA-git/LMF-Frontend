import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getAdminSession, logoutAdmin } from '../../api/admin';
import { ApiError } from '../../api/client';
import LogoWordmark from '../../components/LogoWordmark';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState('');
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getAdminSession()
      .then((data) => {
        if (!cancelled) setAdmin(data.admin);
      })
      .catch((err) => {
        if (cancelled) return;
        if (err instanceof ApiError && err.status === 401) {
          navigate('/admin/login', { replace: true });
          return;
        }
        setError(err.message || 'Could not verify the staff session.');
      });
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  async function onLogout() {
    setLoggingOut(true);
    try {
      await logoutAdmin();
      navigate('/admin/login', { replace: true });
    } catch (err) {
      setError(err.message || 'Sign-out failed.');
      setLoggingOut(false);
    }
  }

  if (error && !admin) {
    return (
      <div className="min-h-screen px-4 py-16 text-center text-lasa-600">
        <p>{error}</p>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="min-h-screen px-4 py-16 text-center text-lasa-600">Checking staff session…</div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F8F5EC_0%,#F3EEDC_38%,#F8F5EC_100%)]">
      <header className="border-b border-lasa-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
          <Link to="/admin" className="flex min-w-0 items-center gap-3">
            <img src="/lasa-logo.jpg" alt="" className="h-12 w-12 object-contain" />
            <LogoWordmark compact className="min-w-0" />
          </Link>
          <nav className="flex flex-wrap items-center gap-2 sm:ml-auto">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${
                  isActive ? 'bg-lasa-700 text-white' : 'text-lasa-700 hover:bg-lasa-50'
                }`
              }
            >
              Clinic days
            </NavLink>
            <p className="px-2 text-sm text-lasa-500">{admin.email}</p>
            <button
              type="button"
              onClick={onLogout}
              disabled={loggingOut}
              className="rounded-full border border-lasa-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-lasa-700 hover:bg-lasa-50 disabled:opacity-60"
            >
              {loggingOut ? 'Signing out…' : 'Sign out'}
            </button>
          </nav>
        </div>
      </header>
      <Outlet />
      {error ? (
        <p className="mx-auto max-w-5xl px-4 py-4 text-sm text-red-800 sm:px-6" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
