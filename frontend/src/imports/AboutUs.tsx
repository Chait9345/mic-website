import svgPaths from "./svg-0w685ii0jq";
import imgDesignathonLogo14 from "figma:asset/c8c25111aa5700a4e734477275eb7665d77dd629.png";
import imgIcBg1 from "figma:asset/a8cb845e1e313a9239c69f70ca07b6b5eea4c6cf.png";
import imgRectangle23 from "figma:asset/e70ab20e268166a3888606186e04404f53613ddb.png";
import imgDesignathonLogo4 from "figma:asset/eebe37ed6d2357932d4cebae730b760f273d0887.png";

function MdiHamburgerMenu() {
  return (
    <div className="absolute left-[1376px] size-[37px] top-[68px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="mdi:hamburger-menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="mdi:hamburger-menu">
          <path d={svgPaths.p59a8f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HomeNavItem({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[333px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[20px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function AboutNavItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[463px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[20px] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fffffd] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Join Now!
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[421px] overflow-clip p-[4px] top-[2247px] w-[115px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://www.ecellmit.in/">
      <Frame3 />
    </a>
  );
}

function MdiInstagram() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="mdi:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="mdi:instagram">
          <path d={svgPaths.p3879ce00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="absolute left-[76px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="Instagram" role="link" tabIndex={0}>
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <MdiInstagram />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function UilFacebook() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="uil:facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="uil:facebook">
          <path d={svgPaths.p24f1c480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute left-[191px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="Facebook" role="link" tabIndex={0}>
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <UilFacebook />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function RiTwitterXFill() {
  return (
    <div className="absolute left-[8px] size-[80px] top-[8px]" data-name="ri:twitter-x-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="ri:twitter-x-fill">
          <path d={svgPaths.pad0e300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[307px] size-[95px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="X">
      <div className="overflow-clip relative rounded-[inherit] size-[95px]">
        <RiTwitterXFill />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <div className="relative shrink-0 size-[211px]" data-name="DesignathonLogo1 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo14} />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[55px] p-[10px] top-[48px] transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Frame28 />
    </div>
  );
}

function Frame43() {
  return (
    <a className="absolute bg-[#232a91] block cursor-pointer h-[1232px] left-0 overflow-clip top-[3096px] w-[1516px]" href="https://x.com/ic_mahe?lang=en">
      <div className="absolute bg-[#fffffd] left-[76px] size-[210px] top-[69px]" />
      <Instagram />
      <Facebook />
      <X />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[83px] not-italic text-[32px] text-white top-[431px] w-[785px]">Our centre is committed to fostering the growth and development of innovative ideas, regardless of discipline or background. We would be honoured to hear your concepts and support you in bringing them to fruition.</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[40px] text-white top-[335px] w-[785px]">Your Space. Our Future. Let’s Build.</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[335px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[421px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Mohammed Zuber
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[621px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Shreelaxmi Prashant
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[469px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chief Innovation Officer, MAHE
      </p>
      <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[999px] text-[20px] text-white top-[669px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Associate Professor, Department of Civil Engineering</p>
        <p>Assistant Director (Innovation and Incubation), MIT, Manipal - 576104</p>
      </div>
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[521px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email : cio.mahe@manipal.edu
      </p>
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[790px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email: innovation@manipal.edu
      </p>
      <Frame42 />
    </a>
  );
}

export default function AboutUs({ 
  onNavigateToHome,
  onNavigateToAbout,
  onNavigateToVentures,
  onNavigateToEvents,
  onScrollToWhatWeOffer,
  onScrollToContact,
  onToggleMenu
}: { 
  onNavigateToHome: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToVentures?: () => void;
  onNavigateToEvents?: () => void;
  onScrollToWhatWeOffer?: () => void;
  onScrollToContact?: () => void;
  onToggleMenu?: () => void;
}) {
  return (
    <div className="bg-[#fffffd] relative size-full" data-name="About Us">
      {/* Navigation Bar */}
      <div className="absolute left-[76px] size-[137px] top-[43px] transition-transform duration-300 hover:scale-105 cursor-pointer z-10" data-name="DesignathonLogo 3" onClick={onNavigateToHome}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo4} />
      </div>
      
      <div onClick={onNavigateToHome} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[333px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Home</p>
      </div>
      
      <div onClick={onNavigateToAbout} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[463px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">About</p>
      </div>
      
      <button onClick={onScrollToWhatWeOffer} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[594px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Labs + Programs</p>
      </button>
      
      <div onClick={onNavigateToVentures} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[810px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Ventures</p>
      </div>
      
      <div onClick={onNavigateToEvents} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[963px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Events</p>
      </div>
      
      <button onClick={onScrollToContact} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[1100px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 z-10 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Contact</p>
      </button>
      
      <div onClick={onToggleMenu} className="absolute left-[1376px] size-[37px] top-[68px] transition-transform duration-300 hover:scale-110 cursor-pointer z-10 group" data-name="mdi:hamburger-menu">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <g id="mdi:hamburger-menu">
            <path d={svgPaths.p59a8f00} fill="black" className="group-hover:fill-[#FF730E] transition-colors duration-300" id="Vector" />
          </g>
        </svg>
      </div>
      
      <div className="absolute h-0 left-[306px] top-[132px] w-[900px] z-10">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="900" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[421px] text-[#757575] text-[24px] top-[306px] w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`The Innovation Centre, MAHE, was established to commemorate the Golden Jubilee of MIT in 2007, to help create the pipeline for entrepreneurship. Fostering creative thinking and innovation through an open network of students, faculty members and community members, the centre at Manipal Academy of Higher Education serves as a platform for students, teachers, researchers, and entrepreneurs to bring their ideas to life. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Manipal Academy of Higher Education, renowned for its commitment to academic excellence, not only prioritizes education but also recognizes the importance of fostering innovation and entrepreneurship. Campus innovations are at the heart of the university's commitment to fostering a culture of creativity, providing students and researchers with the tools they need to drive change through their work, making it a truly experiential hub for learning. With cutting-edge facilities, seed funding support, incubation support, and mentorship, MAHE makes it easier for individuals to turn their visions into substance. `}</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[306px] text-[#757575] text-[24px] top-[985px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Infrastructural support to pre-incubation startups, including office space, laboratory facilities, and access to cutting-edge technology. This valuable and essential support helps innovators to realize their ideas through prototyping and the ability to develop a minimum viable product/service.
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[993px] text-[#757575] text-[24px] top-[1278px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Innovation Centre periodically organizes boot camps, workshops, hackathons, ideation competitions and several awareness programs, thereby providing a comprehensive platform to create awareness and training for students and faculty.
      </p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#030303] text-[42px] text-nowrap top-[299px] whitespace-pre">About Us</p>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#757575] text-[24px] text-nowrap top-[881px] whitespace-pre">What Does Innovation Centre Provide?</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[240px] not-italic text-[#232a91] text-[48px] text-nowrap top-[975px] whitespace-pre">01</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[918px] not-italic text-[#232a91] text-[48px] text-nowrap top-[975px] whitespace-pre">02</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[306px] text-[#757575] text-[24px] top-[1278px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Seed funding support is also a key component of the innovation ecosystem, providing early-stage startups with the resources they need to bring their ideas to life. From prototyping to market research, seed funding helps startups to take their first steps towards success.
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[76px] text-[#757575] text-[24px] top-[1652px] w-[785px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Innovation Centre, MAHE, has been at the forefront of creating a conducive ecosystem for students, researchers, and entrepreneurs to realize their creative abilities. Innovation Centre symbolizes a culture of Innovation where creative minds flourish. So, if you have an innovative idea and want to bring it to life, Innovation Centre is the place to be!
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[996px] text-[#757575] text-[24px] top-[985px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mentorship is another critical component of the innovation ecosystem, providing startups with the guidance they need to succeed. With access to experienced entrepreneurs and business leaders, startups receive valuable advice and feedback as they work to bring their ideas to market.
      </p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[227px] not-italic text-[#232a91] text-[48px] text-nowrap top-[1268px] whitespace-pre">03</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[915px] not-italic text-[#232a91] text-[48px] text-nowrap top-[1268px] whitespace-pre">04</p>
      <div className="absolute h-[152px] left-[884px] top-[1646px] w-[555px]" data-name="ic_bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcBg1} />
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[421px] text-[#757575] text-[24px] top-[2026px] w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`With a vision to promote entrepreneurship and facilitate budding students' ideas to succeed, `}</span>
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://ecellmit.com/">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal]" href="https://ecellmit.com/">
            E-Cell MIT
          </span>
        </a>
        <span>{` Manipal was founded. A key mission of the E-Cell is to act as a one-stop destination for students looking to convert their ideas into viable start-ups and instill the spirit of entrepreneurship. Students with business ideas access a network of industry experts and alumni for mentorship and support. MAHE Innovation Center is a part of this community!`}</span>
      </p>
      <Frame2 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#030303] text-[42px] text-nowrap top-[2019px] whitespace-pre">Join us</p>
      <div className="absolute h-[581px] left-[76px] top-[2364px] w-[1365px]">
        <img alt="" className="block max-w-none size-full" height="581" src={imgRectangle23} width="1365" />
      </div>
      <Frame43 />
    </div>
  );
}