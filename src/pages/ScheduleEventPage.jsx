import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError } from '../api/client';
import { getPublicEvent } from '../api/public';
import BookingFlow from '../components/BookingFlow';
import { getContent } from '../content';
import { formatEventWhen, spotsLabel } from '../utils/formatEvent';
import ScheduleFrame from './ScheduleFrame';

export default function ScheduleEventPage({ lang }) {
  const { eventId } = useParams();
  const content = getContent(lang);
  const page = content.schedulePage;
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getPublicEvent(eventId)
      .then((data) => {
        if (!cancelled) setEvent(data);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof ApiError && err.status === 404 ? page.notFound : page.error);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [eventId, page.error, page.notFound]);

  return (
    <ScheduleFrame content={content} title={event?.title || page.title}>
      {loading ? <p className="text-lasa-600">…</p> : null}
      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      ) : null}
      {event ? (
        <>
          <p className="reading-copy text-lg text-lasa-600">
            {formatEventWhen(event.startsAt, event.endsAt, lang)}
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-lasa-500">
            {spotsLabel(page, event)}
          </p>
          {event.description ? <p className="reading-copy mt-6 text-lasa-600">{event.description}</p> : null}
          <BookingFlow event={event} page={page} lang={lang} />
        </>
      ) : null}
      <Link
        to={content.paths.schedule}
        className="mt-10 inline-flex items-center rounded-full border border-lasa-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-lasa-600 transition hover:bg-lasa-50"
      >
        {page.backToList}
      </Link>
    </ScheduleFrame>
  );
}
