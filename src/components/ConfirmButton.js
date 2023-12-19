import { useData, useGame } from "@/app/layout";
import Link from "next/link";
import { useState } from "react";

export function ConfirmButton(props) {
  // const { setIsHidden } = useData();
  //   const [isHidden, setIsHidden] = useState(true);
  console.log(props.link);

  // const { isDone, setIsDone } = useGame();
  const { map } = useGame();

  if (props.link === "/finish") {
    // map = {
    //   0: true,
    //   1: true,
    //   2: false,
    // };
    // setIsDone([true, true, false]);
    // console.log(`balance`);
  }
  // console.log(isDone);

  const aa = () => {
    console.log(`aaaaß`);
    setIsDone([false, false, false]);
  };
  return (
    <div>
      <Link href={`${props.link}`}>
        <button
          className="btn btn-active btn-primary w-full text-white bg-[#0166ff] border-none text-white"
          // onClick={setIsHidden((prev) => !prev)}
        >
          {props.name}
        </button>
      </Link>

      <div onClick={aa}>oooo</div>
    </div>
  );
}
