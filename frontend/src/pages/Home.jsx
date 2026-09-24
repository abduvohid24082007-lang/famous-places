import { SignInButton, SignUpButton } from "@clerk/react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to famous places darling!
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Siz bolgan eng mashxur joylarni saqlang boshqaring. Kirish yoki
        ro'yxatdan o'ting va boshlang.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <SignUpButton mode="modal">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Boshlash
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium">
            Kirish
          </button>
        </SignInButton>
      </div>
    </div>
  );
}

export default Home;
