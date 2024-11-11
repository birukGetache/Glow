const Home = () => {
    return (
      <div className="h-[80vh] pl-20 pr-20 text-black flex justify-center items-center w-screen relative overflow-hidden box-border">
        <style>
          {`
            .before-text::before {
              content: "Ultrasound";
              position: absolute;
              top: 60%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 200px;
              font-weight: bold;
              color: #ddd;
              z-index: -1;
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
  
        <div className="before-text w-full">
          <div className="grid grid-cols-3 gap-4 w-full">
            {/* Left Div Animation */}
            <div
              className="flex flex-col items-center justify-center animate-slideInLeft"
              style={{
                animation: "slideInLeft 2s ease-in-out forwards",
              }}
            >
              <h1 className="text-4xl font-bold mb-4 text-yellow-500 overflow-y-hidden">
                Health through nature
              </h1>
              <button className="mt-6 px-6 py-3 bg-black text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer">
                Learn More
              </button>
            </div>
  
            {/* Center Image Animation */}
            <div
              className="flex items-center justify-center animate-fadeIn"
              style={{
                animation: "fadeIn 2s ease-in-out forwards",
              }}
            >
              <img src="./ali.png" className="h-96" alt="Image" />
            </div>
  
            {/* Right Div Animation */}
            <div
              className="flex flex-col items-center justify-center animate-slideInRight"
              style={{
                animation: "slideInRight 2s ease-in-out forwards",
              }}
            >
              <h1 className="text-4xl font-bold mb-4 text-yellow-500 overflow-y-hidden">
                Feel Safe
              </h1>
              <span className="pl-10">100% natural</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  