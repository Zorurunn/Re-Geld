import Link from "next/link";
import { VectorSvg } from "./SVG/VectorSvg";
import { useGame } from "@/app/layout";
// import { usePro } from "@/app/layout";

export function WelcomePage() {
  const { isHidden, setIsHidden } = useGame();

  return (
    <div className="h-full grid grid-cols-2 w-full">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col w-[80%] gap-[30px]">
          <div className=" flex gap-[5px] justify-center">
            <div className=" flex jystify-center items-center">
              <VectorSvg />
            </div>
            <div className="text-[24px] flex jystify-center items-center">
              Geld
            </div>
          </div>
          <div className="flex  flex-col gap-[10px] justify-center items-center">
            <div className="text-[24px]">Welcome Back</div>
            <div className="text-[16px]  text-gray-500">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex  flex-col gap-[10px] justify-center items-center">
            <input
              className="w-full rounded-[5px] h-[50px] pl-[10px]"
              placeholder="Email"
            />
            <input
              className="w-full rounded-[5px] h-[50px] pl-[10px]"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="btn btn-active btn-primary w-full text-white bg-sky-700 border-none">
              Log in
            </button>
          </div>
          <div className="flex gap-[10px] justify-center">
            <div>Don’t have account?</div>
            <div className="cursor-pointer text-[blue]">
              <Link href={"/createAccount"}> Sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-700"></div>
    </div>
  );
}
