"use client";
import { VectorSvg } from "@/components/SVG/VectorSvg";
// import { useData } from "../layout";
import { useData, usePro } from "@/app/layout";
import LogoName from "@/components/LogoName";
import Step from "@/components/Step";
import { MoneySvg } from "@/components/SVG/MoneySvg";
import { ConfirmButton } from "@/components/ConfirmButton";
import { Container } from "@/components/Container";
import { CoinSvg } from "@/components/SVG/CoinSvg";

export default function Balance() {
  // const { is, isSet } = usePro();
  // console.log(is);

  // const { isDone, setIsDone } = useData();
  // const { setIsHidden } = useData();
  // let done = true;
  return (
    <Container>
      <div className="flex w-full h-full justify-center">
        <div className="flex flex-col  pt-[40px] w-[40%]">
          <div className="flex flex-col justify-center items-center gap-[48px] mb-[148px]">
            <LogoName />
            <Step />
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] mb-[24px]">
            <CoinSvg />
            <div className="text-[24px]"> Set up your cash Balance</div>
          </div>

          <div className="flex flex-col gap-[10px] mb-[32px]">
            <div className="w-full rounded-[5px] bg-gray-200 flex justify-center">
              <input
                className="w-full h-[40px] bg-gray-200 rounded-[5px] pl-[10px]"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="text-[12px]">
              How much cash do you have in your wallet?{" "}
            </div>
          </div>

          <ConfirmButton name="Confirm" link="/finish" />
        </div>
      </div>
    </Container>
  );
}
