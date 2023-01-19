const Shimmer = () => {
  return (
    <div className=" flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="bg-gray-300 p-[20px] rounded-md animate-pulse w-[280px] h-[260px] m-2 flex flex-nowrap gap-4 justify-center items-start flex-col"
          >
            <div className="w-[100px] h-[80px] bg-slate-200 rounded-lg"></div>
            <p className="w-[180px] h-[10px] bg-slate-400"></p>
            <p className="w-[180px] h-[10px] bg-slate-400"></p>
            <p className="w-[180px] h-[10px] bg-slate-400"></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
