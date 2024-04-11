import { useForm } from "react-hook-form";
import { defaultValues, schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

interface IProps {
  name: string;
  password: string;
}

const LoginComp = () => {
    const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: IProps) => {
    localStorage.setItem('user', JSON.stringify(data))
    navigate('/')
  };

  return (
    <div className="grid grid-cols-2">
      <div className="bg-slate-50">
        <div className="m-auto max-w-[400px] mt-24">
          <p className="text-3xl text-sky-600">Login!</p>
          <p className="text-sm mt-2"> Wellcom back ! Select method to login</p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex justify-center items-center gap-2 border-[1px] border-solid rounded p-2 bg-slate-200">
              <img
                src="/assets/images/social/google.svg"
                alt="google"
                className="max-w-[30px] max-h-[30px]"
              />
              <p className="font-medium font-base">Google</p>
            </div>
            <div className="flex justify-center items-center gap-2 border-[1px] border-solid rounded p-2 bg-slate-200">
              <img
                src="/assets/images/social/facebook.svg"
                alt="facebook"
                className="max-w-[30px] max-h-[30px]"
              />
              <p className="font-medium font-base">Facebook</p>
            </div>
          </div>
          <div className="my-4">
            <p className="font-bold text-sm text-center">OR</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid grid-cols-1 gap-[20px]">
                <div className="grid grid-cols-1">
                  <label className="text-sm font-medium">Name : </label>
                  <input
                    {...register("name")}
                    className="border-[1px] border-current border-solid h-[40px] p-[10px] rounded mt-2"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1">
                  <label className="text-sm font-medium">Password : </label>
                  <input
                    {...register("password")}
                    className="border-[1px] border-current border-solid h-[40px] p-[10px] rounded mt-2"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div>
                  <input type="checkbox" />
                  <span className="ml-2 text-sm">Remember me</span>
                </div>
                <a className="text-sm text-sky-600 font-medium" href="/">
                  Forgot Password ?
                </a>
              </div>
              <div className="flex mt-[30px] justify-center">
                <button
                  type="submit"
                  className="p-[6px] rounded w-full font-bold bg-sky-600 text-white"
                >
                  SUBMIT
                </button>
              </div>
              <div className="flex justify-center items-center mt-4 gap-4">
                <span className="text-sm">Don't have an account?</span>
                <a
                  href="/authen/register"
                  className="text-sm text-sky-600 font-medium"
                >
                  Register now !
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/assets/images/authen/login.jpeg"
          alt="login"
          className="w-[100vh] h-[100vh] object-cover"
        />
      </div>
    </div>
  );
};

export default LoginComp;
