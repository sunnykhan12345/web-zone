
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  return (
    <>
      <div className="text-center text-white text-4xl  my-10">
        <UserButton afterSignOutUrl="/" />
      </div>

    </>
  );
}
