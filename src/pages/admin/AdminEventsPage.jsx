import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createAdminEvent,
  deleteAdminEvent,
  listAdminEvents,
  updateAdminEvent,
} from '../../api/admin';
import { ApiError } from '../../api/client';

const STATUSES = ['DRAFT', 'PUBLISHED', 'CANCELLED'];
const fieldClass =
  'mt-2 w-full rounded-xl border border-lasa-200 bg-white px-4 py-3 text-lasa-700 outline-none ring-lasa-600/20 focus:ring-4';

function pad(value) {
  return String(value).padStart(2, '0');
}

function toLocalInput(date) {
  const value = date instanceof Date ? date : new Date(date);
  return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}T${pad(value.getHours())}:${pad(value.getMinutes())}`;
}

function defaultWindow() {
  const start = new Date();
  const daysUntilSaturday = (6 - start.getDay() + 7) % 7 || 7;
  start.setDate(start.getDate() + daysUntilSaturday);
  start.setHours(9, 0, 0, 0);
  const end = new Date(start);
  end.setHours(13, 0, 0, 0);
  return { startsAt: toLocalInput(start), endsAt: toLocalInput(end) };
}

function emptyForm() {
  return {
    title: 'Medical Clinic',
    description: '',
    capacity: 20,
    status: 'PUBLISHED',
    ...defaultWindow(),
  };
}

function formatRange(startsAt, endsAt) {
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(start);
  const time = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${date} · ${time.format(start)} – ${time.format(end)}`;
}

function statusClass(status) {
  if (status === 'PUBLISHED') return 'bg-emerald-50 text-emerald-800';
  if (status === 'CANCELLED') return 'bg-red-50 text-red-800';
  return 'bg-lasa-100 text-lasa-700';
}

export default function AdminEventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const sorted = useMemo(
    () => [...events].sort((a, b) => new Date(b.startsAt) - new Date(a.startsAt)),
    [events],
  );

  async function refresh() {
    const data = await listAdminEvents();
    setEvents(data);
  }

  useEffect(() => {
    let cancelled = false;
    refresh()
      .catch((err) => {
        if (cancelled) return;
        if (err instanceof ApiError && err.status === 401) {
          navigate('/admin/login', { replace: true });
          return;
        }
        setError(err.message || 'Could not load clinic days.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  function updateField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function onCreate(event) {
    event.preventDefault();
    setError('');
    setNotice('');
    setSaving(true);
    try {
      const createdStatus = form.status;
      await createAdminEvent({
        title: form.title.trim(),
        description: form.description.trim() || null,
        startsAt: new Date(form.startsAt).toISOString(),
        endsAt: new Date(form.endsAt).toISOString(),
        capacity: Number(form.capacity),
        status: createdStatus,
      });
      setForm(emptyForm());
      await refresh();
      setNotice(
        createdStatus === 'PUBLISHED'
          ? 'Clinic day created and published. It now appears on the public schedule.'
          : 'Draft clinic day saved.',
      );
    } catch (err) {
      setError(err.message || 'Could not create the clinic day.');
    } finally {
      setSaving(false);
    }
  }

  async function onStatus(id, status) {
    setError('');
    setNotice('');
    try {
      await updateAdminEvent(id, { status });
      await refresh();
    } catch (err) {
      setError(err.message || 'Could not update the clinic day.');
    }
  }

  async function onDelete(id) {
    setError('');
    setNotice('');
    try {
      await deleteAdminEvent(id);
      await refresh();
    } catch (err) {
      setError(err.message || 'Could not delete the clinic day.');
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="font-sans text-4xl text-lasa-700">Clinic days</h1>
      <p className="mt-3 max-w-2xl text-lasa-600">
        Create a dated clinic session with a capacity cap. Published days are what patients will
        eventually book from the schedule page.
      </p>

      <form className="narrative-panel mt-8 rounded-3xl p-6 sm:p-8" onSubmit={onCreate}>
        <h2 className="text-lg font-semibold text-lasa-700">New clinic day</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Title</span>
            <input
              required
              minLength={3}
              value={form.title}
              onChange={(event) => updateField('title', event.target.value)}
              className={fieldClass}
            />
          </label>
          <label>
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Starts</span>
            <input
              type="datetime-local"
              required
              value={form.startsAt}
              onChange={(event) => updateField('startsAt', event.target.value)}
              className={fieldClass}
            />
          </label>
          <label>
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Ends</span>
            <input
              type="datetime-local"
              required
              value={form.endsAt}
              onChange={(event) => updateField('endsAt', event.target.value)}
              className={fieldClass}
            />
          </label>
          <label>
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Capacity</span>
            <input
              type="number"
              min={1}
              max={10000}
              required
              value={form.capacity}
              onChange={(event) => updateField('capacity', event.target.value)}
              className={fieldClass}
            />
          </label>
          <label>
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">Status</span>
            <select
              value={form.status}
              onChange={(event) => updateField('status', event.target.value)}
              className={fieldClass}
            >
              {STATUSES.filter((status) => status !== 'CANCELLED').map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label className="sm:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-lasa-700">
              Description
            </span>
            <textarea
              rows={3}
              value={form.description}
              onChange={(event) => updateField('description', event.target.value)}
              className={fieldClass}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="mt-6 rounded-xl bg-lasa-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-lasa-600 disabled:opacity-60"
        >
          {saving ? 'Saving…' : 'Create clinic day'}
        </button>
      </form>

      {error ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          {notice}
        </p>
      ) : null}

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-lasa-700">Existing days</h2>
        {loading ? <p className="mt-4 text-lasa-600">Loading…</p> : null}
        {!loading && sorted.length === 0 ? (
          <p className="mt-4 text-lasa-600">No clinic days yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {sorted.map((item) => (
              <li key={item.id} className="rounded-3xl border border-lasa-200 bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-lasa-700">{item.title}</h3>
                    <p className="mt-1 text-sm text-lasa-600">{formatRange(item.startsAt, item.endsAt)}</p>
                    <p className="mt-1 text-sm text-lasa-500">Capacity {item.capacity}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${statusClass(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                {item.description ? <p className="mt-3 text-sm text-lasa-600">{item.description}</p> : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.status === 'DRAFT' ? (
                    <button
                      type="button"
                      onClick={() => onStatus(item.id, 'PUBLISHED')}
                      className="rounded-full bg-lasa-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
                    >
                      Publish
                    </button>
                  ) : null}
                  {item.status !== 'CANCELLED' ? (
                    <button
                      type="button"
                      onClick={() => onStatus(item.id, 'CANCELLED')}
                      className="rounded-full border border-lasa-200 px-4 py-2 text-xs font-bold uppercase tracking-wide text-lasa-700"
                    >
                      Cancel day
                    </button>
                  ) : null}
                  {item.status === 'DRAFT' ? (
                    <button
                      type="button"
                      onClick={() => onDelete(item.id)}
                      className="rounded-full border border-red-200 px-4 py-2 text-xs font-bold uppercase tracking-wide text-red-700"
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
