const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-[#FFDD55] w-full min-h-screen md:w-[768px] lg:w-[1000px] lg:h-[3800px] relative p-4">
        

        <nav className="bg-black w-full h-[80px] md:h-[100px] lg:h-[120px] rounded-b-[40px] flex items-center justify-between px-4 lg:px-12 absolute top-0 left-0">
          <img src="images/logo.png" alt="Logo" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]" />

          <div className="hidden lg:flex gap-[48px]">
            <ul className="flex space-x-[38px]">
              <li className="text-white text-[26px] font-semibold">Home</li>
              <li className="text-white text-[26px] font-semibold">About</li>
              <li className="text-white text-[26px] font-semibold">Services</li>
              <li className="text-white text-[26px] font-semibold">Contact</li>
            </ul>
          </div>

 
          <div className="lg:hidden">
            <img src="images/Hamburger_MD.png" alt="Menu" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
          </div>
        </nav>


        <div className="flex flex-col md:flex-row justify-between items-center mt-[100px] md:mt-[120px] lg:mt-[160px] px-4">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-black text-[28px] md:text-[34px] lg:text-[54px] font-extrabold">Hello,</h1>
            <h1 className="text-black text-[28px] md:text-[34px] lg:text-[54px] font-extrabold mt-2">I'm</h1>
            <h3 className="text-[#474A57] text-[14px] md:text-[15px] lg:text-[20px] font-semibold mt-4">
              UI/UX Designer, React Developer
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <button className="w-[90px] md:w-[100px] lg:w-[194px] h-[35px] md:h-[40px] lg:h-[63px] bg-black text-white text-[10px] md:text-[12px] lg:text-[20px] font-semibold rounded-lg">
                Hire Me
              </button>
              <button className="w-[90px] md:w-[100px] lg:w-[194px] h-[35px] md:h-[40px] lg:h-[63px] bg-black text-white text-[10px] md:text-[12px] lg:text-[20px] font-semibold rounded-lg">
                Download CV
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-0 w-full md:w-1/2">
            <img src="images/avatar.png" alt="Profile" className="w-[180px] md:w-[205px] lg:w-[370px] h-[220px] md:h-[245px] lg:h-[480px] rounded-lg" />
            <div className="flex flex-col gap-2 ml-2 md:ml-4">
              <img src="images/Component1.png" alt="Icon 1" className="w-[30px] md:w-[40px] lg:w-[76px] h-[30px] md:h-[40px] lg:h-[76px] rounded-lg" />
              <img src="images/Component2.png" alt="Icon 2" className="w-[30px] md:w-[40px] lg:w-[76px] h-[30px] md:h-[40px] lg:h-[76px] rounded-lg" />
              <img src="images/Component3.png" alt="Icon 3" className="w-[30px] md:w-[40px] lg:w-[76px] h-[30px] md:h-[40px] lg:h-[76px] rounded-lg" />
              <img src="images/Component4.png" alt="Icon 4" className="w-[30px] md:w-[40px] lg:w-[76px] h-[30px] md:h-[40px] lg:h-[76px] rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-[#106EE8] w-full md:w-[700px] lg:w-[900px] h-auto md:h-[500px] lg:h-[600px] mx-auto my-10 p-4 md:p-8 flex flex-col md:flex-row relative rounded-[15px] mt-[80px] md:mt-[100px] lg:mt-[150px]">
          <img src="images/avatar2.png" alt="Avatar 2" className="w-full md:w-[300px] lg:w-[355.08px] h-[300px] md:h-[380px] lg:h-[440.68px] object-contain mx-auto md:mx-0" />
          
          <div className="mt-6 md:mt-0 md:ml-8 lg:ml-12">
            <h2 className="text-[40px] md:text-[45px] lg:text-[50px] font-extrabold text-white">ABOUT ME</h2>
            <div className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#FFDD55]">UI/UX Designer</div>
            <div className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#FFDD55] mt-1">React Developer</div>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] font-bold text-white mt-4 leading-[22px]">
              Hello! I'm a UI/UX designer and React developer. Dive into my portfolio to discover a fusion of elegant design and seamless react development. Welcome to a world where creativity meets functionality!
            </p>
            
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
              <button className="w-full md:w-[154px] h-[40px] md:h-[43px] bg-black text-white rounded-[15px] text-[18px] md:text-[22px] font-bold">
                Hire Me
              </button>
              <button className="w-full md:w-[194px] h-[40px] md:h-[43px] bg-black text-white rounded-[15px] text-[18px] md:text-[22px] font-bold">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#EB7711] w-full   md:w-[768px] lg:w-[1000px] h-auto min-h-[1000px] mx-auto mt-[80px] md:mt-[100px] lg:mt-[150px] p-4 md:p-8 relative">
          <div className="text-center">
            <h2 className="text-black text-[40px] md:text-[50px] lg:text-[64px] font-[800] mt-[40px] md:mt-[60px] lg:mt-[80px]">
              Services
            </h2>
          </div>
          
          <p className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-[700] leading-[28px] md:leading-[32px] lg:leading-[34px] text-center max-w-[850px] mx-auto mt-8">
            Embark on a journey of digital transformation with services that blend design brilliance with cutting-edge development. Let's create experiences that resonate and applications that captivate.
          </p>


          <div className="flex flex-col md:flex-row justify-center items-center gap-[60px] md:gap-[40px] mt-[100px]">
        
            <div className="relative w-full md:w-auto">
              <div className="bg-[#0ACF83] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[132px] lg:h-[132px] rounded-full absolute -top-[50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white text-[50px] md:text-[60px] lg:text-[74px] font-[800]">1</span>
              </div>
              
              <div className="bg-[#A259FF] w-full md:w-[300px] lg:w-[350px] h-auto min-h-[450px] md:h-[480px] lg:h-[500px] border-[3px] border-black rounded-[15px] p-6 flex flex-col items-center shadow-[10px_10px_4.2px_0px_#000000]">
                <h1 className="text-white text-[20px] md:text-[22px] lg:text-[24px] font-bold mt-[50px] text-center">
                  UI/UX Designer
                </h1>
                <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-[700] leading-[24px] mt-[40px] px-[20px] text-center">
                  Crafting captivating interfaces that resonate. From wireframes to polished designs, I make sure your digital presence stands out with user-centric creativity.
                </p>
                <button className="mt-[40px] w-[240px] md:w-[260px] lg:w-[280px] h-[60px] md:h-[65px] lg:h-[71px] bg-[#FFDD55] text-black text-[24px] md:text-[26px] lg:text-[28px] font-bold rounded-[10px] flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </div>

           
            <div className="relative w-full md:w-auto">
              <div className="bg-[#0ACF83] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[132px] lg:h-[132px] rounded-full absolute -top-[50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white text-[50px] md:text-[60px] lg:text-[74px] font-[800]">2</span>
              </div>
              
              <div className="bg-[#A259FF] w-full md:w-[300px] lg:w-[350px] h-auto min-h-[450px] md:h-[480px] lg:h-[500px] border-[3px] border-black rounded-[15px] p-6 flex flex-col items-center shadow-[10px_10px_4.2px_0px_#000000]">
                <h1 className="text-white text-[20px] md:text-[22px] lg:text-[24px] font-bold mt-[50px] text-center">
                  React Developer
                </h1>
                <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-[700] leading-[24px] mt-[40px] px-[20px] text-center">
                  Turning app ideas into reality. As a React developer, I build sleek, cross-platform applications for a seamless user experience and efficient performance.
                </p>
                <button className="mt-[40px] w-[240px] md:w-[260px] lg:w-[280px] h-[60px] md:h-[65px] lg:h-[71px] bg-[#FFDD55] text-black text-[24px] md:text-[26px] lg:text-[28px] font-bold rounded-[10px] flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0ACF83] w-full md:w-[768px]    lg:w-[1000px] h-auto min-h-[300px] md:h-[350px] lg:h-[408px] mx-auto mt-[80px] md:mt-[100px] lg:mt-[150px] flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-[800] leading-[30px] md:leading-[34px]">
              If You have any Query or Project ideas feel free to
            </p>
            <button className="mt-[40px] md:mt-[50px] lg:mt-[70px] w-full md:w-[500px] lg:w-[589px] h-[80px] md:h-[100px] lg:h-[122px] bg-[#FFDD55] text-black text-[24px] md:text-[30px] lg:text-[36px] font-bold rounded-[47px] flex items-center justify-center mx-auto" style={{ boxShadow: "-15px 15px 4.2px 0px #000000" }}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Footer*/}
        <div className="mt-[80px] md:mt-[100px] lg:mt-[150px] px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <img src="images/logo.png" alt="Image" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]" />
            <h1 className="text-black text-[30px] md:text-[35px] lg:text-[40px] font-bold">NAMIK KORONA</h1>
          </div>

          <p className="text-center text-[20px] md:text-[25px] lg:text-[30px] font-[700] leading-[32px] md:leading-[38px] lg:leading-[42px] mt-[30px] max-w-[702px] mx-auto">
            I Make as soon as Possible. You really like my work contact me and let's Work Together.
          </p>

          <div className="flex justify-center gap-[10px] mt-[40px]">
            <img src="images/Component1.png" alt="Image 1" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px]" />
            <img src="images/Component2.png" alt="Image 2" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px]" />
            <img src="images/Component3.png" alt="Image 3" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px]" />
            <img src="images/Component4.png" alt="Image 4" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px]" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-[40px] pb-[30px]">
            <div className="flex items-center">
              <img src="images/location.png" alt="Image" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] mr-[4px]" />
              <span className="text-black text-[16px] md:text-[18px] font-montserrat">Türkiye</span>
            </div>

            <p className="text-black text-[13px] md:text-[15px] font-light text-center">
              © 2024, All Rights By Figma Design.
            </p>

            <div className="flex gap-2">
              <a href="#" className="text-[#3B5999] text-[10px] md:text-[11px] font-light px-3 md:px-4 py-2 rounded-[5px]">Guides</a>
              <a href="#" className="text-[#3B5999] text-[10px] md:text-[11px] font-light px-3 md:px-4 py-2 rounded-[5px]">Terms of Use</a>
              <a href="#" className="text-[#3B5999] text-[10px] md:text-[11px] font-light px-3 md:px-4 py-2 rounded-[5px]">Privacy Policy</a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;