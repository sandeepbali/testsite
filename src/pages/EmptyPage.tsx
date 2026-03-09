import { Link } from 'react-router-dom';

export function EmptyPage() {
  return (
    <div className="min-h-screen bg-navy text-gold flex flex-col items-center justify-center font-sans noise-bg">
      <h1 className="text-4xl mb-4 font-serif">Empty Page</h1>
      <p className="mb-8 text-gold-dark">This link leads nowhere.</p>
      <Link to="/" className="underline hover:text-white transition-colors">
        Go Back
      </Link>
    </div>
  );
}
