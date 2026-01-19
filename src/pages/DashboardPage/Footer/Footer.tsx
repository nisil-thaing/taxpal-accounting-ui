import { type FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-slate-400">Copyright © {new Date().getFullYear()} TaxPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
