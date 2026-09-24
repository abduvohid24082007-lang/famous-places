import { useUser } from '@clerk/react';

export default function useCurrentUser() {
  const { user, isLoaded } = useUser();

  return {
    user,
    isLoaded,
    isSignedIn: isLoaded && !!user,
    displayName: user?.firstName || user?.username || 'Mehmon',
    email: user?.primaryEmailAddress?.emailAddress || '',
    avatar: user?.imageUrl || '',
  };
}