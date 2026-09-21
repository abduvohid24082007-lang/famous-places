  import {
    Show,
    SignInButton,
    SignUpButton,
    UserButton
  } from '@clerk/react';

  function Navbar() {
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            Kolleksiya App
          </h1>

          <div className="flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm">Kirish</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm">Ro'yxatdan o'tish</button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>
        </div>
      </header>
    );
  }

  export default Navbar;