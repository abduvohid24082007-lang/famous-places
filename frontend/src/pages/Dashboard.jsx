
import useCurrentUser from "../hooks/useCurrentUser";

function Dashboard() {
   const { user, isLoaded, displayName, email, avatar } = useCurrentUser();
    if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-ikkilamchi">Yuklanmoqda...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
         <div className="mb-8 flex items-center gap-4">
        <img
          src={avatar}
          alt={displayName}
          className="w-16 h-16 rounded-full border-2 border-vodiy-qaragayi"
        />
        <div>
          <h1 className="font-heading text-3xl text-archa-tuni">
            Salom, {displayName}!
          </h1>
          <p className="text-ikkilamchi mt-1">{email}</p>
        </div>
      </div>
      
  );
}

export default Dashboard;
