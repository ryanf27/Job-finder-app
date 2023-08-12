import logo2 from "../../Assets/img/logo2.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The Value that holds us true and to account
      </h1>

      <div className="grid  gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo2} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[12px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautiful simple are at the heart of everyting we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo2} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[12px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautiful simple are at the heart of everyting we
            do.
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo2} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[12px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
            Things being made beautiful simple are at the heart of everyting we
            do.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blue1Color p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blue1Color text-[30px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Lets get started
          </h2>
          <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blue-100 hover:bg-white border-blue3Color">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;
