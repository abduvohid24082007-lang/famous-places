import useCurrentUser from "../hooks/useCurrentUser";
import { useClerk } from "@clerk/react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, isLoaded, displayName, email, avatar } = useCurrentUser();
  const { openUserProfile, signOut } = useClerk();
  const navigate = useNavigate();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white font-semibold animate-pulse">
          Yuklanmoqda...
        </p>
      </div>
    );
  }

  if (!user) return null;

  const chiqish = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-2xl">

        {/* Profile Card */}
        <div
          className="
            bg-black/40
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
            border border-cyan-300/30
            shadow-[0_0_40px_rgba(34,211,238,0.15)]
          "
        >

          {/* Header */}
          <div
            className="
              h-36
              bg-gradient-to-r
              from-cyan-500/80
              via-blue-500/70
              to-violet-600/80
              relative
            "
          >
            <div className="absolute inset-0 bg-white/10" />

            {/* Neon lights */}
            <div
              className="
                absolute top-4 right-8
                w-24 h-24
                bg-cyan-300/30
                rounded-full
                blur-3xl
              "
            />

            <div
              className="
                absolute bottom-0 left-8
                w-28 h-28
                bg-violet-400/30
                rounded-full
                blur-3xl
              "
            />
          </div>

          {/* Avatar + Name */}
          <div className="px-6 -mt-16 mb-8 relative">
            <div className="flex flex-col items-center">

              {/* Avatar */}
              <div
                className="
                  p-1
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-300
                  via-blue-400
                  to-violet-500
                  shadow-[0_0_25px_rgba(34,211,238,0.7)]
                "
              >
                <img
                  src={avatar}
                  alt={displayName}
                  className="
                    w-32 h-32
                    rounded-full
                    border-4 border-black/70
                    object-cover
                  "
                />
              </div>

              {/* Name */}
              <h1
                className="
                  text-3xl
                  font-black
                  mt-5
                  bg-gradient-to-r
                  from-white
                  via-cyan-200
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
                "
              >
                {displayName}
              </h1>

              {/* Email */}
              <p className="text-white/70 mt-2 font-medium">
                {email}
              </p>

              {/* Badge */}
              <span
                className="
                  mt-4
                  px-4 py-1.5
                  rounded-full
                  text-sm
                  font-semibold
                  text-cyan-200
                  bg-cyan-400/10
                  border border-cyan-300/30
                  shadow-[0_0_12px_rgba(34,211,238,0.2)]
                "
              >
                ✦ Foydalanuvchi
              </span>
            </div>
          </div>

          {/* User Information */}
          <div className="border-t border-white/10 px-6 py-6 space-y-4">

            {/* User ID */}
            <div
              className="
                flex justify-between items-center
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                px-4 py-4
                hover:border-cyan-300/40
                transition-all duration-300
              "
            >
              <span className="text-white/60 text-sm">
                Foydalanuvchi ID
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  text-cyan-300
                  max-w-[220px]
                  truncate
                "
              >
                {user.id}
              </span>
            </div>

            {/* Registration Date */}
            <div
              className="
                flex justify-between items-center
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                px-4 py-4
                hover:border-cyan-300/40
                transition-all duration-300
              "
            >
              <span className="text-white/60 text-sm">
                Ro'yxatdan o'tgan
              </span>

              <span className="text-cyan-300 font-semibold">
                {new Date(user.createdAt).toLocaleDateString("uz-UZ")}
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div
            className="
              border-t border-white/10
              px-6 py-6
              flex flex-col sm:flex-row
              gap-4
            "
          >

            {/* Settings */}
            <button
              onClick={() => openUserProfile()}
              className="
                flex-1
                py-3
                rounded-xl
                font-semibold
                text-white
                bg-archazor
                border-2 border-cyan-300
                transition-all duration-300
                hover:bg-cyan-400
                hover:text-black
                hover:border-cyan-200
                hover:shadow-[0_0_10px_rgba(34,211,238,0.8),0_0_30px_rgba(34,211,238,0.5)]
                hover:scale-105
              "
            >
              ⚙ Hisobni sozlash
            </button>

            {/* Logout */}
            <button
              onClick={chiqish}
              className="
                flex-1
                py-3
                rounded-xl
                font-semibold
                text-white
                bg-black/30
                border-2 border-pink-300/70
                transition-all duration-300
                hover:bg-pink-500
                hover:text-white
                hover:border-pink-300
                hover:shadow-[0_0_10px_rgba(236,72,153,0.8),0_0_30px_rgba(236,72,153,0.5)]
                hover:scale-105
              "
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