
export default function Blog() {
  return (
    <div className=" flex-col h-full w-fullh-full bg-green-100 flex items-center justify-center p-5 gap-5 ">
      <h1 className="text-xl ">Blog</h1>

      <div className="flex lg:w-11/12 2xl:w-10/12 xl:h-60 bg-slate-500 gap-3 items-center justify-around xl:p-3">
        <div className=" w-full h-56 bg-white"></div>
        <div className=" w-full h-56 bg-white"></div>
        <div className=" w-full h-56 bg-white"></div>
        <div className=" w-full h-56 bg-white"></div>
        <div className=" w-full h-56 bg-white"></div>
        <div className=" w-full h-56 bg-white"></div>
      </div>
    </div>
  );
}
