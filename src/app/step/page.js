"use client";

import { ConfirmButton } from "@/components/ConfirmButton";
import { Container } from "@/components/Container";
import LogoName from "@/components/LogoName";
import { MoneySvg } from "@/components/SVG/MoneySvg";
import Step from "@/components/Step";
import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const step = searchParams.get("step");

  if (step == 1) {
    return (
      <Container>
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col  pt-[40px] w-[40%]">
            <div className="flex flex-col justify-center items-center gap-[48px] mb-[148px]">
              <LogoName />
              <Step />
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px] mb-[24px]">
              <MoneySvg />
              <div className="text-[24px]"> Select base currency</div>
            </div>

            <div className="flex flex-col gap-[10px] mb-[32px]">
              <div className="w-full rounded-[5px] bg-gray-200 flex justify-center">
                <select
                  className="w-[90%] h-[40px] rounded-[5px] bg-gray-200 pr-[80px] text-[18px]"
                  name="currency"
                >
                  <option value="2">MNT - Mongolian Tugrik</option>
                  <option value="1">JP - Japanese Yen</option>
                  <option value="0">Zoloo</option>
                </select>
              </div>
              <div className="text-[12px]">
                Your base currency should be the one you use most often. All
                transaction in other currencies will be calculated based on this
                one{" "}
              </div>
            </div>

            <ConfirmButton name="Confirm" link="/balance" />
          </div>
        </div>
      </Container>
    );
  } else if (step == 2) {
    return <>step2</>;
  } else if (step == 2) {
    return <>step3</>;
  }
}
