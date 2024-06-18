import FormInput from "../components/FormInput";
import { useLogin } from "../hooks/useLogin";
import { Form, useActionData } from "react-router-dom";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, email, password };
};
function Register() {
  const ixtiyoriy = useActionData();
  console.log(ixtiyoriy);
  const { signUpWithGoogle } = useLogin();
  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput type="text" labelText="Display Name:" name="displayName" />
        <FormInput type="email" labelText="Email:" name="email" />
        <FormInput type="password" labelText="Password:" name="password" />
        <div className="mt-6">
          <button
            onClick={signUpWithGoogle}
            type="submit"
            className="btn btn-primary mt-3 btn-block"
          >
            Google
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
