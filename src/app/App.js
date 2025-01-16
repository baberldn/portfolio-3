const App = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <main className="bg-[#FFDD55] w-full lg:w-[1000px] lg:h-[3800px] relative p-4">
        
          <nav className="bg-black w-full h-[120px] rounded-b-[40px] flex items-center justify-between px-4 lg:px-12 absolute top-0 left-0">
            <img src="images/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            <div className="hidden lg:flex gap-[48px]">
              <ul className="flex space-x-[38px]">
                <li className="text-white text-[26px] font-semibold">Home</li>
                <li className="text-white text-[26px] font-semibold">About</li>
                <li className="text-white text-[26px] font-semibold">Services</li>
                <li className="text-white text-[26px] font-semibold">Contact</li>
              </ul>
            </div>
            <div className="lg:hidden">
              <img
                src="images/Hamburger_MD.png"
                alt="Menu"
                className="w-[50px] h-[50px]"
              />
            </div>
          </nav>
  
      
          <div className="lg:flex lg:justify-between lg:items-center mt-[160px]"> 
            <div className="lg:text-left text-left">
              <h1 className="text-black text-[34px] lg:text-[54px] font-extrabold mt-12">
                Hello,
              </h1>
              <h1 className="text-black text-[34px] lg:text-[54px] font-extrabold mt-2">
                I'm
              </h1>
              <h3 className="text-[#474A57] text-[15px] lg:text-[20px] font-semibold mt-4">
                UI/UX Designer, React Developer
              </h3>
              <div className="flex space-x-4 mt-8">
                <button className="w-[100px] lg:w-[194px] h-[40px] lg:h-[63px] bg-black text-white text-[12px] lg:text-[20px] font-semibold rounded-lg">
                  Hire Me
                </button>
                <button className="w-[100px] lg:w-[194px] h-[40px] lg:h-[63px] bg-black text-white text-[12px] lg:text-[20px] font-semibold rounded-lg">
                  Download CV
                </button>
              </div>
            </div>
  
          
            <div className="flex items-center lg:justify-end mt-12 lg:mt-0"> 
              <img
                src="images/avatar.png"
                alt="Profile"
                className="w-[205px] lg:w-[370px] h-[245px] lg:h-[480px] rounded-lg"
              />
              <div className="flex flex-col gap-2 mt-4 lg:mt-0 ml-4">
                <img
                  src="images/Component1.png"
                  alt="Icon 1"
                  className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
                />
                <img
                  src="images/Component2.png"
                  alt="Icon 2"
                  className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
                />
                <img
                  src="images/Component3.png"
                  alt="Icon 3"
                  className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
                />
                <img
                  src="images/Component4.png"
                  alt="Icon 4"
                  className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#106EE8] w-[900px] h-[600px] mx-auto my-10 flex relative rounded-[15px] mt-[150px]">
  <img src="images/avatar2.png" alt="Avatar 2" className="w-[355.08px] h-[440.68px] absolute top-[80px] left-[20px]" />
  <div className="absolute top-[100px] left-[400px] w-[450px] h-[400px] ">
    <div className="text-left text-[50px] font-extrabold text-white">
      ABOUT ME
    </div>
    <div className="text-[22px] font-bold text-[#FFDD55] text-left">
      UI/UX Designer
    </div>
    <div className="text-[22px] font-bold text-[#FFDD55] mt-[1px] text-left">
      React Developer
    </div>
    <p className="text-[18px] font-bold text-white mt-[20px] text-left leading-[22px]">
      Hello! I'm a UI/UX designer and React developer. Dive into my portfolio to discover a fusion of elegant design and seamless react development. Welcome to a world where creativity meets functionality!
    </p>
   
    <div className="mt-[50px] flex space-x-8">
      <div className="w-[154px] h-[43px] bg-[#00C6AE] rounded-[15px]"></div>
      <div className="w-[194px] h-[43px] bg-[#00C6AE] rounded-[15px]"></div>
    </div>
  </div>

  <div className="absolute top-[415px] left-[395px] flex space-x-7">
  <button className="w-[154px] h-[43px] bg-black text-white rounded-[15px] text-[22px] font-[700] leading-[39.01px] text-center no-underline">
  Hire Me
</button>
<button className="w-[194px] h-[43px] bg-black text-white rounded-[15px] text-[22px] font-[700] leading-[39.01px] text-center no-underline">
  Download CV
</button>
  </div>
</div>


<div className="bg-[#EB7711] w-[1000px] h-[1000px] ml-[-15px] mt-[150px] relative">
  <div className="w-[1000px] h-[200px] flex justify-center">
    <div className="text-black text-[64px] font-[800] leading-[40px] text-left no-underline font-montserrat mt-[80px]">
      Services
    </div>
  </div>
  <p className="text-white text-[24px] font-[700] leading-[34px] text-center w-[850px] h-[102px] ml-[50px]">
    Embark on a journey of digital transformation with services that blend design brilliance with cutting-edge development. Let's create experiences that resonate and applications that captivate.
  </p>
  <div
    className="absolute w-[350px] h-[500px] top-[420px] left-[90px] bg-[#A259FF] border-[3px] border-black rounded-[15px]"
  >
  
  </div>

  

  <div className="absolute bg-[#A259FF] w-[350px] h-[500px] top-[420px] left-[90px] border-[3px] border-black rounded-[15px] flex flex-col items-center shadow-[10px_10px_4.2px_0px_#000000]">
  <h1 className="text-white text-[24px] font-bold mt-[70px] text-center">
    UI/UX Designer
  </h1>
  <p className="text-white text-[22px] font-[700] leading-[24px] mt-[40px] px-[20px] text-center font-montserrat">
    Crafting captivating interfaces that resonate. From wireframes to polished designs, I make sure your digital presence stands out with user-centric creativity.
  </p>
  <button className="mt-[40px] w-[280px] h-[71px] bg-[#FFDD55] text-black text-[28px] font-bold rounded-[10px] flex items-center justify-center">
    Learn More
  </button>
</div>

<div className="absolute bg-[#0ACF83] w-[132px] h-[132px] rounded-full top-[350px] left-[200px] flex items-center justify-center">
  <span className="text-white text-[74px] font-[800]">1</span>
</div>

<div className="absolute bg-[#A259FF] w-[350px] h-[500px] top-[420px] left-[540px] border-[3px] border-black rounded-[15px] flex flex-col items-center shadow-[10px_10px_4.2px_0px_#000000]">
  <h1 className="text-white text-[24px] font-bold mt-[70px] text-center">
    React Developer
  </h1>
  <p className="text-white text-[22px] font-[700] leading-[24px] mt-[40px] px-[20px] text-center font-montserrat">
    Turning app ideas into reality. As a React developer, I build sleek, cross-platform applications for a seamless user experience and efficient performance.
  </p>
  <button className="mt-[40px] w-[280px] h-[71px] bg-[#FFDD55] text-black text-[28px] font-bold rounded-[10px] flex items-center justify-center">
    Learn More
  </button>
</div>

<div className="absolute bg-[#0ACF83] w-[132px] h-[132px] rounded-full top-[350px] left-[640px] flex items-center justify-center">
  <span className="text-white text-[74px] font-[800]">2</span>
</div>

</div>





<div className="absolute inset-0 flex justify-center items-center bg-[#0ACF83] w-[1000px] h-[408px] mt-[150px] top-[2500px]">
  <div className="text-center">
    <p className="text-white text-[32px] font-[800] leading-[34px] mt-[100px]">
      If You have any Query or Project ideas feel free to  
    </p>
    <button className="mt-[70px] w-[589px] h-[122px] bg-[#FFDD55] text-black text-[36px] font-bold rounded-[47px] flex items-center justify-center ml-[150px]" style={{ boxShadow: "-15px 15px 4.2px 0px #000000" }}>
      Contact Me
    </button>
  </div>
</div>






<div className="absolute  w-[520px] h-[200px] top-[86%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center justify-between px-[20px]">
  <img src="images/logo.png" alt="Image" className="w-[80px] h-[80px] ml-[30px]" />
  <h1 className="text-black text-[40px] font-bold font-montserrat">NAMIK KORONA</h1>
</div>

<p className="absolute w-[702px] h-[85px] text-[30px] font-[700] leading-[42px] mt-[50px] text-center font-montserrat top-[88%] left-[50%] transform -translate-x-[50%]">
  I Make as soon as Possible. You really like my work contact me and let’s Work Together.
</p>
<div className="absolute w-full top-[93.5%] left-[50%] transform -translate-x-[50%] flex  px-[20px] ml-[300px] gap-[10px]">
  <img src="images/Component1.png" alt="Image 1" className="w-[86px] h-[86px] " />
  <img src="images/Component2.png" alt="Image 2" className="w-[86px] h-[86px]" />
  <img src="images/Component3.png" alt="Image 3" className="w-[86px] h-[86px]" />
  <img src="images/Component4.png" alt="Image 4" className="w-[86px] h-[86px]" />
</div>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[80px]  flex items-center justify-between px-[30px] bottom-[50px]" id="footer">
 
<div className="flex items-center">
  <img src="images/location.png" alt="Image" className="w-[18px] h-[18px] mr-[4px]" />
  <span className="text-black text-[18px] font-montserrat">Türkiye</span>
</div>



  <p className="text-black text-[15px] font-light leading-[30.48px] text-center font-montserrat ml-[180px] whitespace-nowrap">
  © 2024, All Rights By Figma Design.
</p>


  
<div className="flex gap-2 ml-[50px]">
  <a href="#" className="text-[#3B5999] text-[11px] font-light px-4 py-2 rounded-[5px]">Guides</a>
  <a href="#" className="text-[#3B5999] text-[11px] font-light px-4 py-2 rounded-[5px]">Terms of Use</a>
  <a href="#" className="text-[#3B5999] text-[11px] font-light px-4 py-2 rounded-[5px]">Privacy Policy</a>
</div>


</div>






    </main>
      </div>
    );
  };
  
  export default App;
  