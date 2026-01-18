import type { FC } from 'react';
import { Link } from 'react-router';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => (
  <header className="header-main">
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {/* ... other links */}
    </nav>
  </header>
);
