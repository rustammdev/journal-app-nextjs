import { SignIn as ClerkSignIn } from "@clerk/nextjs";
// error : Import declaration conflicts with local declaration of 'SignIn'.
function SignIn() {
  return <ClerkSignIn />;
}

export default SignIn;
