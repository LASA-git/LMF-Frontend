import ContactActions from './ContactActions';

export default function ContactBlock({ content }) {
  const { contact } = content;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-lasa-300 bg-gradient-to-r from-lasa-700 to-lasa-600 p-6 text-white shadow-lg sm:p-8">
        <p className="reading-copy text-base text-lasa-50 sm:text-lg">{contact.emergency}</p>
      </div>
      <p className="reading-copy text-base text-lasa-600 sm:text-lg">{contact.body}</p>
      <ContactActions className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" />
      <p className="text-lasa-600">{contact.inquiryLine}</p>
    </div>
  );
}
