const Home = () => {
  return (
    <div className="h-[90vh]  text-black flex justify-center items-center w-screen relative overflow-hidden box-border">
     <style>
  {`
    .before-text::before {
      content: "Glow Production";
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 170px;
      white-space: nowrap; 
      font-weight: bold;
      color:transparent;
      z-index: 59;
      -webkit-text-stroke: 4px yellow; /* Adds a black border around the text */
    }

    /* Keyframes for left and right animations */
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}
</style>


      <div className="before-text w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full ">
          {/* Left Div Animation */}
          <div
  className="flex flex-col items-center justify-center animate-slideInLeft w-full px-4 md:px-0 bg-slate-600"
  style={{
    animation: "slideInLeft 2s ease-in-out forwards",
  }}
>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3 lg:mb-4 text-yellow-500 overflow-y-hidden text-center">
    Health through nature
  </h1>
  <div
            className="flex flex-col items-center justify-center animate-slideInRight"
            style={{
              animation: "slideInRight 2s ease-in-out forwards",
            }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-700 overflow-y-hidden text-center">
              Feel Safe
            </h1>
            <span className="text-center pl-10 md:pl-0">97% natural</span>
          </div>
</div>


          {/* Center Image Animation */}
          <div
            className="flex items-center justify-center animate-fadeIn"
            style={{
              animation: "fadeIn 2s ease-in-out forwards",
            }}
          >
            <img src="./imageHome.png" className="h-[90%] w-auto" alt="Image center" />
          </div>

          {/* Right Div Animation */}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
