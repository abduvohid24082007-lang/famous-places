import useCurrentUser from '../hooks/useCurrentUser';
import { useClerk } from '@clerk/react';
import { useNavigate } from 'react-router';

function Profile() {
  const { user, isLoaded, displayName, email, avatar } = useCurrentUser();
  const { openUserProfile, signOut } = useClerk();
  const navigate = useNavigate();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-cyan-100">
        <p className="text-violet-600 font-semibold animate-pulse">
          Yuklanmoqda...
        </p>
      </div>
    );
  }

  if (!user) return null;

  const chiqish = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-sky-50 to-pink-100 px-4 py-10">
      <div className="container mx-auto max-w-2xl">

        {/* Profile Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white">

          {/* Header */}
          <div className="h-36 bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 relative">
            <div className="absolute inset-0 bg-white/10"></div>

            <div className="absolute top-5 right-6 w-20 h-20 rounded-full bg-pink-400/30 blur-2xl"></div>
            <div className="absolute bottom-2 left-8 w-24 h-24 rounded-full bg-yellow-300/30 blur-2xl"></div>
          </div>

          {/* Avatar + Name */}
          <div className="px-6 -mt-16 mb-7">
            <div className="flex flex-col items-center">

              <img
                src={avatar}
                alt={displayName}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
              />

              <h1 className="font-bold text-3xl mt-4 bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                {displayName}
              </h1>

              <p className="text-gray-500 mt-1">
                {email}
              </p>

              <span className="mt-3 px-4 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-700">
                Foydalanuvchi
              </span>
            </div>
          </div>

          {/* User information */}
          <div className="border-t border-gray-100 px-6 py-6 space-y-4">

            <div className="flex justify-between items-center bg-violet-50 rounded-xl px-4 py-3">
              <span className="text-gray-500 text-sm">
                Foydalanuvchi ID
              </span>

              <span className="font-mono text-xs text-violet-700 max-w-[220px] truncate">
                {user.id}
              </span>
            </div>

            <div className="flex justify-between items-center bg-cyan-50 rounded-xl px-4 py-3">
              <span className="text-gray-500 text-sm">
                Ro'yxatdan o'tgan
              </span>

              <span className="text-cyan-700 font-medium">
                {new Date(user.createdAt).toLocaleDateString('uz-UZ')}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="border-t border-gray-100 px-6 py-6 flex flex-col sm:flex-row gap-3">

            <button
              onClick={() => openUserProfile()}
              className="flex-1 py-3 rounded-xl text-white font-semibold
              bg-gradient-to-r from-violet-600 to-blue-500
              hover:from-violet-700 hover:to-blue-600
              shadow-lg shadow-violet-200
              hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-0.5"
            >
              Hisobni sozlash
            </button>

            <button
              onClick={chiqish}
              className="flex-1 py-3 rounded-xl font-semibold
              text-pink-600
              border-2 border-pink-200
              bg-pink-50
              hover:bg-pink-500
              hover:text-white
              hover:border-pink-500
              transition-all duration-300"
            >
              Chiqish
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;