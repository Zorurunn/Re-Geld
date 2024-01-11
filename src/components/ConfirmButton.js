import { useData, useGame } from "@/app/layout";
import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export function ConfirmButton(props) {
  const { setUrl } = useGame();

  const handleClick = (event) => {
    const currentUrl = event.target.parentNode.href;
    setUrl(currentUrl);
  };
  return (
    <div>
      <Link href={`${props.link}`}>
        <button
          className="btn btn-active btn-primary w-full text-white bg-[#0166ff] border-none text-white"
          onClick={handleClick}
        >
          {props.name}
        </button>
      </Link>
    </div>
  );
}
