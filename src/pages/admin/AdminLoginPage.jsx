import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin, getAdminSession } from '../../api/admin';
import { ApiError, getApiUrl } from '../../api/client';
import LogoWordmark from '../../components/LogoWordmark';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getAdminSession()
      .then(() => {
        if (!cancelled) navigate('/admin', { replace: true });
      })
      .catch(() => {
        if (!cancelled) setChecking(false);
      });
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  async function onSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await loginAdmin(email.trim(), password);
      navigate('/admin', { replace: true });
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        setError('Invalid email or password.');
      } else if (err instanceof ApiError && err.status === 429) {
        setError('Too many login attempts. Please wait and try again.');
      } else {
        setError(err.message || 'Sign-in failed.');
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (checking) {
    return (
      <AdminShell>
        <p className="text-center text-lasa-600">Checking staff session…</p>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <h1 className="font-display text-3xl text-lasa-700 sm:text-4xl">Staff sign-in</h1>
      <p className="mt-3 text-sm leading-relaxed text-lasa-600">
        This page is not linked from the public clinic site. It signs in against {getApiUrl()}.
      </p>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Email</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border border-lasa-200 bg-white px-4 py-3 text-lasa-700 outline-none ring-lasa-600/20 focus:ring-4"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border border-lasa-200 bg-white px-4 py-3 text-lasa-700 outline-none ring-lasa-600/20 focus:ring-4"
          />
        </label>

        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-lasa-700 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-lasa-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </AdminShell>
  );
}

function AdminShell({ children }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#E8F2FA_0%,#F5F9FD_38%,#F5F9FD_100%)] px-4 py-10 sm:px-6">
      <main className="mx-auto w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <img src="/lasa-crest.png" alt="LASA Medical Foundation Inc." className="h-24 w-auto" />
          <LogoWordmark className="mt-4" />
        </div>
        <div className="narrative-panel rounded-3xl p-6 sm:p-8">{children}</div>
        <p className="mt-6 text-center text-sm text-lasa-500">
          <Link to="/" className="font-semibold text-lasa-600 hover:text-lasa-700">
            Back to public site
          </Link>
        </p>
      </main>
    </div>
  );
}
