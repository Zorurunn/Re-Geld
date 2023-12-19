export default function Step() {
  let done = true;
  return (
    // <div className="flex flex-col justify-center items-center">
    <div className="relative w-[300px] h-[10px] bg-[gray] flex ">
      <div className="w-6 h-6 top-[-50%] left-[-5%] translate-y-[-5%] absolute bg-[#0166ff] rounded-full z-10"></div>
      <div className="w-6 h-6 top-[-60%] left-[-2%]  absolute text-white z-20">
        1
      </div>
      <div
        className={`relative w-[150px] h-[10px] 
          ${done ? "bg-[#0166ff]" : "bg-gray-400"} `}
      ></div>
      <div
        className={`w-6 h-6 top-[-50%] left-[50%] translate-y-[-5%] translate-x-[-50%] absolute    
        ${done ? "bg-[#0166ff]" : "bg-gray-400"} rounded-full z-10`}
      ></div>
      <div className="w-6 h-6 top-[-60%] left-[52%]  translate-x-[-50%] absolute text-white z-20">
        2
      </div>
      <div
        className={`relative w-[150px] h-[10px] bg-gray-400
         ${done ? "bg-[#0166ff]" : "bg-gray-400"}`}
      ></div>
      <div
        className={`w-6 h-6 top-[-50%] left-[95%] translate-y-[-5%] absolute bg-gray-400 rounded-full z-10
        ${done ? "bg-[#0166ff]" : "bg-gray-400"}`}
      ></div>
      <div className="w-6 h-6 top-[-60%] left-[97%]  absolute text-white z-20">
        3
      </div>
    </div>
    // </div>
  );
}
