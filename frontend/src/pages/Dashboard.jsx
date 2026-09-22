import { useUser } from '@clerk/react';

function Dashboard() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Salom, {user?.firstName || user?.username || 'foydalanuvchi'}!
        </h1>
        <p className="text-gray-600 mt-1">
          Bu sizning shaxsiy kolleksiya boshqaruv panelingiz.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Hozircha hech narsa yo'q
        </h2>
        <p className="text-gray-500 mb-6">
          Keyingi darslarda bu yerga kolleksiya elementlarini qo'shamiz.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;