import SignInForm from "@/components/FomAuth/SignInForm";

export default function Index() {
  return (
    <>
      {/**aca debe estar el login y si inicio sesion se va al dashboard */}
      {/**aca debe estar el login y si inicio sesion con un contextApi de reactse va al dashboard */}

      <div className="min-w-2xl mx-auto ">
        <SignInForm />
      </div>
    </>
  );
}
