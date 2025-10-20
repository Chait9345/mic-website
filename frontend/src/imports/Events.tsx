import svgPaths from "./svg-nhmk5fa2fi";
import imgDesignathonLogo14 from "figma:asset/c8c25111aa5700a4e734477275eb7665d77dd629.png";
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

function EventsNavItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[963px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[20px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative w-full">
          <p className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#fffffd] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Join Now!
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[421px] overflow-clip p-[4px] top-[3420px] w-[115px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://www.ecellmit.in/">
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
    <a className="absolute bg-[#232a91] block cursor-pointer h-[1232px] left-[-4px] overflow-clip top-[4438px] w-[1516px]" href="https://x.com/ic_mahe?lang=en">
      <div className="absolute bg-[#fffffd] left-[76px] size-[210px] top-[69px]" />
      <Instagram />
      <Facebook />
      <X />
      <p className="absolute font-['Poppins:Italic',_sans-serif] italic leading-[normal] left-[83px] text-[32px] text-white top-[431px] w-[785px]">Our centre is committed to fostering the growth and development of innovative ideas, regardless of discipline or background. We would be honoured to hear your concepts and support you in bringing them to fruition.</p>
      <p className="absolute font-['Poppins:Italic',_sans-serif] italic leading-[normal] left-[76px] text-[40px] text-white top-[335px] w-[785px]">Your Space. Our Future. Let’s Build.</p>
      <p className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[335px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
      <p className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[421px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Mohammed Zuber
      </p>
      <p className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[999px] text-[32px] text-nowrap text-white top-[621px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Shreelaxmi Prashant
      </p>
      <p className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[469px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chief Innovation Officer, MAHE
      </p>
      <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[999px] text-[20px] text-white top-[669px] w-[440px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Associate Professor, Department of Civil Engineering</p>
        <p>Assistant Director (Innovation and Incubation), MIT, Manipal - 576104</p>
      </div>
      <p className="absolute font-['Roboto:Bold_Italic',_sans-serif] font-bold italic leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[521px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email : cio.mahe@manipal.edu
      </p>
      <p className="absolute font-['Roboto:Bold_Italic',_sans-serif] font-bold italic leading-[normal] left-[999px] text-[20px] text-nowrap text-white top-[790px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email: innovation@manipal.edu
      </p>
      <Frame42 />
    </a>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative w-full">
          <p className="font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#fffffd] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Register Now
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[76px] overflow-clip p-[4px] top-[1037px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://forms.office.com/r/wxrPnZN4Dd?origin=lprLink" target="_blank" rel="noopener noreferrer">
      <Frame4 />
    </a>
  );
}

function RegisterButton1() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[76px] overflow-clip p-[4px] top-[1439px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://forms.office.com/r/wxrPnZN4Dd?origin=lprLink" target="_blank" rel="noopener noreferrer">
      <Frame4 />
    </a>
  );
}

function RegisterButton2() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[80px] overflow-clip p-[4px] top-[1841px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://forms.office.com/r/wxrPnZN4Dd?origin=lprLink" target="_blank" rel="noopener noreferrer">
      <Frame4 />
    </a>
  );
}

function RegisterButton3() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[80px] overflow-clip p-[4px] top-[2243px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://forms.office.com/r/wxrPnZN4Dd?origin=lprLink" target="_blank" rel="noopener noreferrer">
      <Frame4 />
    </a>
  );
}

function RegisterButton4() {
  return (
    <a className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[76px] overflow-clip p-[4px] top-[2645px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://forms.office.com/r/wxrPnZN4Dd?origin=lprLink" target="_blank" rel="noopener noreferrer">
      <Frame4 />
    </a>
  );
}

export default function Events({ 
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
    <div className="bg-[#fffffd] relative size-full" data-name="Events">
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
      <div className="relative size-full bg-[rgba(0,0,0,0)]">
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[306px] w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">{`The Innovation Centre, MAHE, was established to commemorate the Golden Jubilee of MIT in 2007, to help create the pipeline for entrepreneurship. Fostering creative thinking and innovation through an open network of students, faculty members and community members, the centre at Manipal Academy of Higher Education serves as a platform for students, teachers, researchers, and entrepreneurs to bring their ideas to life. `}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">{`Manipal Academy of Higher Education, renowned for its commitment to academic excellence, not only prioritizes education but also recognizes the importance of fostering innovation and entrepreneurship. Campus innovations are at the heart of the university's commitment to fostering a culture of creativity, providing students and researchers with the tools they need to drive change through their work, making it a truly experiential hub for learning. With cutting-edge facilities, seed funding support, incubation support, and mentorship, MAHE makes it easier for individuals to turn their visions into substance. `}</p>
          <p>&nbsp;</p>
        </div>
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[931px] w-[670px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Lorem ipsum dolor sit amet. Aut molestiae rerum et incidunt veritatis ea eaque voluptatem? Eos repellendus assumenda nam reiciendis quia cum assumenda possimus in quae autem vel enim dolorum ut numquam totam!</p>
          <p>Et asperiores ullam 33 modi sunt ut assumenda esse et fuga magnam et minima mollitia. Id suscipit sint non dolor itaque qui rerum inventore ab molestiae officiis. Aut maiores quas et odio voluptas ea mollitia tempora id quisquam eveniet. Ad tempora dignissimos ut fugiat Quis est nostrum quia est minima dicta et libero commodi.</p>
        </div>
        <p className="absolute font-['Poppins:Italic',_sans-serif] italic leading-[normal] left-[76px] text-[#030303] text-[42px] text-nowrap top-[299px] whitespace-pre">Events</p>
        <p className="absolute font-['Roboto:Italic',_sans-serif] font-['Roboto:Regular',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[3178px] w-[900px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{`With a vision to promote entrepreneurship and facilitate budding students' ideas to succeed, `}</span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://ecellmit.com/" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid italic leading-[normal]" href="https://ecellmit.com/" style={{ fontVariationSettings: "'wdth' 100" }}>
              E-Cell MIT
            </span>
          </a>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` Manipal was founded. A key mission of the E-Cell is to act as a one-stop destination for students looking to convert their ideas into viable start-ups and instill the spirit of entrepreneurship. Students with business ideas access a network of industry experts and alumni for mentorship and support. MAHE Innovation Center is a part of this community!`}</span>
        </p>
        <Frame2 />
        <p className="absolute font-['Poppins:Italic',_sans-serif] italic leading-[normal] left-[76px] text-[#030303] text-[42px] text-nowrap top-[3171px] whitespace-pre">Join us</p>
        <div className="absolute h-[581px] left-[79px] top-[3694px] w-[1365px]">
          <img alt="" className="block max-w-none size-full" height="581" src={imgRectangle23} width="1365" />
        </div>
        <Frame43 />
        <div className="absolute left-[76px] top-[927px] w-[325px] transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer">
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#030303] text-[36px]">Design2Deploy</p>
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#757575] text-[24px]">28th September, 2025</p>
        </div>
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[1332px] w-[670px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Lorem ipsum dolor sit amet. Aut molestiae rerum et incidunt veritatis ea eaque voluptatem? Eos repellendus assumenda nam reiciendis quia cum assumenda possimus in quae autem vel enim dolorum ut numquam totam!</p>
          <p>Et asperiores ullam 33 modi sunt ut assumenda esse et fuga magnam et minima mollitia. Id suscipit sint non dolor itaque qui rerum inventore ab molestiae officiis. Aut maiores quas et odio voluptas ea mollitia tempora id quisquam eveniet. Ad tempora dignissimos ut fugiat Quis est nostrum quia est minima dicta et libero commodi.</p>
        </div>
        <div className="absolute left-[76px] top-[1329px] w-[325px] transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer">
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#030303] text-[36px]">Lifeathon 2.0</p>
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#757575] text-[24px]">30th July, 2025</p>
        </div>
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[1733px] w-[670px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Lorem ipsum dolor sit amet. Aut molestiae rerum et incidunt veritatis ea eaque voluptatem? Eos repellendus assumenda nam reiciendis quia cum assumenda possimus in quae autem vel enim dolorum ut numquam totam!</p>
          <p>Et asperiores ullam 33 modi sunt ut assumenda esse et fuga magnam et minima mollitia. Id suscipit sint non dolor itaque qui rerum inventore ab molestiae officiis. Aut maiores quas et odio voluptas ea mollitia tempora id quisquam eveniet. Ad tempora dignissimos ut fugiat Quis est nostrum quia est minima dicta et libero commodi.</p>
        </div>
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[2134px] w-[670px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Lorem ipsum dolor sit amet. Aut molestiae rerum et incidunt veritatis ea eaque voluptatem? Eos repellendus assumenda nam reiciendis quia cum assumenda possimus in quae autem vel enim dolorum ut numquam totam!</p>
          <p>Et asperiores ullam 33 modi sunt ut assumenda esse et fuga magnam et minima mollitia. Id suscipit sint non dolor itaque qui rerum inventore ab molestiae officiis. Aut maiores quas et odio voluptas ea mollitia tempora id quisquam eveniet. Ad tempora dignissimos ut fugiat Quis est nostrum quia est minima dicta et libero commodi.</p>
        </div>
        <div className="absolute left-[80px] top-[1731px] w-[325px] transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer">
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#030303] text-[36px]">BEcon 2025</p>
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#757575] text-[24px] top-[51px] absolute">18th January, 2025</p>
        </div>
        <div className="absolute left-[80px] top-[2133px] w-[325px] transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer">
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#030303] text-[36px]">Saptah</p>
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#757575] text-[24px] top-[51px] absolute">16th -21st December, 2024</p>
        </div>
        <div className="absolute font-['Roboto:Italic',_sans-serif] font-normal italic leading-[normal] left-[421px] text-[#757575] text-[24px] top-[2538px] w-[670px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0">Lorem ipsum dolor sit amet. Aut molestiae rerum et incidunt veritatis ea eaque voluptatem? Eos repellendus assumenda nam reiciendis quia cum assumenda possimus in quae autem vel enim dolorum ut numquam totam!</p>
          <p>Et asperiores ullam 33 modi sunt ut assumenda esse et fuga magnam et minima mollitia. Id suscipit sint non dolor itaque qui rerum inventore ab molestiae officiis. Aut maiores quas et odio voluptas ea mollitia tempora id quisquam eveniet. Ad tempora dignissimos ut fugiat Quis est nostrum quia est minima dicta et libero commodi.</p>
        </div>
        <div className="absolute left-[76px] top-[2535px] w-[325px] transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer">
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#030303] text-[36px]">Lifeathon</p>
          <p className="font-['Poppins:Italic',_sans-serif] italic leading-[normal] text-[#757575] text-[24px] top-[51px] absolute">12th April, 2024</p>
        </div>
        <div className="absolute bg-[#d9d9d9] h-[274px] left-[1111px] top-[931px] w-[326px] transition-transform duration-300 hover:scale-105 cursor-pointer" />
        <div className="absolute bg-[#d9d9d9] h-[274px] left-[1107px] top-[1332px] w-[326px] transition-transform duration-300 hover:scale-105 cursor-pointer" />
        <div className="absolute bg-[#d9d9d9] h-[274px] left-[1107px] top-[1733px] w-[326px] transition-transform duration-300 hover:scale-105 cursor-pointer" />
        <div className="absolute bg-[#d9d9d9] h-[274px] left-[1111px] top-[2134px] w-[326px] transition-transform duration-300 hover:scale-105 cursor-pointer" />
        <div className="absolute bg-[#d9d9d9] h-[274px] left-[1107px] top-[2535px] w-[326px] transition-transform duration-300 hover:scale-105 cursor-pointer" />
        <Frame94 />
        <RegisterButton1 />
        <RegisterButton2 />
        <RegisterButton3 />
        <RegisterButton4 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}