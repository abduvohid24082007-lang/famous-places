import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/react';

import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-asosiy font-semibold'
      : 'text-matn hover:text-asosiy transition';

  return (
    <header className="bg-fon border-b border-ikkilamchi/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-xl text-matn"
        >
          famous places
        </Link>

        <nav className="flex items-center gap-6">

          {/* Login / Register - faqat chiqmagan userga */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-matn hover:text-asosiy font-medium transition">
                Kirish
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="bg-archazor text-ohaktosh px-4 py-2 rounded-lg hover:opacity-90 transition font-medium">
                Ro'yxatdan o'tish
              </button>
            </SignUpButton>
          </Show>

          {/* Dashboard / Profile - faqat kirgan userga */}
          <Show when="signed-in">
            <NavLink
              to="/dashboard"
              className={linkClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/profile"
              className={linkClass}
            >
              Profile
            </NavLink>

            <UserButton />
          </Show>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;