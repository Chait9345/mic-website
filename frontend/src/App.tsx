import React, { useEffect, useRef, useState } from "react";
import svgPaths from "./imports/svg-fk4ngsz8fk";
import AboutUs from "./imports/AboutUs";
import MacBookPro143 from "./imports/MacBookPro143";
import Events from "./imports/Events";
import Menu from "./imports/Menu";
import MobileView from "./src/views/MobileView";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgDesignathonLogo3 from "figma:asset/eebe37ed6d2357932d4cebae730b760f273d0887.png";
import imgDesignathonLogo14 from "figma:asset/c8c25111aa5700a4e734477275eb7665d77dd629.png";
import imgLifathonB1 from "figma:asset/994c5781b272388d8608a6c3dad852c2d6f63bf7.png";
import imgRectangle22 from "figma:asset/b8f87d8705ff501693f6aac0afab9deb2cdf7e88.png";
import imgRectangle23 from "figma:asset/02c8a8c881c959ff8fc134816ec295261b5ac2c8.png";
import imgRectangle24 from "figma:asset/75737e0ca7f59fa41f701bdbd75aba8e75bb64f1.png";
import imgRectangle25 from "figma:asset/d0e19b80e17d0e3306ac97f3d80e5de77e64520d.png";
import imgScreenshot20250928At64614Pm1 from "figma:asset/47d16a167ec1dc3c4d9aef446618b30cbe17c610.png";
import imgRectangle16 from "figma:asset/d23dde0bbd5bc5e6a8395754fa02fc2b23b6e5bf.png";
import imgRectangle14 from "figma:asset/60a2f6e99965a9a3ec9e5393a4683653b184c80c.png";
import imgImage1 from "figma:asset/71055bc967b76ac7f773c096c996b3edea657376.png";
import imgImage2 from "figma:asset/69a36934ba3ae9c6f8a1f1461fd7426b8ed8228b.png";
import imgImage3 from "figma:asset/17ed33bb30e73044470782b256cd0c3b146981df.png";
import imgImage4 from "figma:asset/3c1f3a38ce34f2226de5a515e9e560481961ef08.png";
import imgImage5 from "figma:asset/fced1c2bb6415e9d52140a3b9d55e9810221b3f2.png";
import JoinNowButton from "./components/JoinNowButton";
import IdeaSubmitBinder from "./components/IdeaSubmitBinder";
console.log("[ENV CHECK]", import.meta.env.VITE_API_BASE_URL);


/**
 * @figmaAssetKey 040a59688f317a07942b7cbb3bf69bd146d9899e
 */
function RiTwitterXFill({ className }: { className?: string }) {
  return (
    <div className={className} data-name="ri:twitter-x-fill">
      <div className="absolute inset-[12.76%_8.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 60">
          <path d={svgPaths.pbbd2300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 76e50c4622b0ccd29669accb8bff01cf4b33cb86
 */
function UilFacebook({ className }: { className?: string }) {
  return (
    <div className={className} data-name="uil:facebook">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
          <path d={svgPaths.p1de22740} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 7733e0de9194719daf8b80c7f0e3d055b74b65ff
 */
function MdiInstagram({ className }: { className?: string }) {
  return (
    <div className={className} data-name="mdi:instagram">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 67">
          <path d={svgPaths.p338600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

// Navigation Bar Component
function NavBar({
  onNavigateToHome,
  onNavigateToAbout,
  onNavigateToVentures,
  onNavigateToEvents,
  onScrollToWhatWeOffer,
  onScrollToContact,
  onToggleMenu,
  currentPage
}: {
  onNavigateToHome: () => void;
  onNavigateToAbout: () => void;
  onNavigateToVentures: () => void;
  onNavigateToEvents: () => void;
  onScrollToWhatWeOffer: () => void;
  onScrollToContact: () => void;
  onToggleMenu: () => void;
  currentPage: string;
}) {
  return (
    <>
      {/* Logo */}
      <div className="absolute left-[76px] size-[137px] top-[43px] transition-transform duration-300 hover:scale-105 cursor-pointer" data-name="DesignathonLogo 3" onClick={onNavigateToHome}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo3} />
      </div>

      {/* Navigation Items */}
      <div onClick={onNavigateToHome} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[333px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Home</p>
      </div>

      <div onClick={onNavigateToAbout} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[463px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">About</p>
      </div>

      <button onClick={onScrollToWhatWeOffer} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[594px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Labs + Programs</p>
      </button>

      <div onClick={onNavigateToVentures} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[810px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Ventures</p>
      </div>

      <div onClick={onNavigateToEvents} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[963px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Events</p>
      </div>

      <button onClick={onScrollToContact} className="absolute box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center left-[1100px] overflow-visible p-[10px] top-[79px] transition-all duration-300 hover:scale-110 group">
        <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] group-hover:text-[#FF730E] text-[20px] text-nowrap whitespace-pre transition-colors duration-300">Contact</p>
      </button>

      {/* Hamburger Menu */}
      <div onClick={onToggleMenu} className="absolute left-[1376px] size-[37px] top-[68px] transition-transform duration-300 hover:scale-110 cursor-pointer group" data-name="mdi:hamburger-menu">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <g id="mdi:hamburger-menu">
            <path d={svgPaths.p59a8f00} fill="black" className="group-hover:fill-[#FF730E] transition-colors duration-300" id="Vector" />
          </g>
        </svg>
      </div>

      {/* Divider Line */}
      <div className="absolute h-0 left-[306px] top-[132px] w-[900px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="900" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </>
  );
}

function Frame27() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[58px] p-[10px] top-[1645px]">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[24px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fffffd] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Start Now!
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#232a91] box-border content-stretch flex flex-col gap-[10px] items-start left-[770px] overflow-clip p-[4px] top-[468px] w-[115px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <Frame3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[66px] p-[10px] top-[312px]">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[42px] w-[555px]">Where big dreams and ideas belong. What's your next idea?</p>
    </div>
  );
}

function MdiHamburgerMenu({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute left-[1376px] size-[37px] top-[68px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="mdi:hamburger-menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="mdi:hamburger-menu">
          <path d={svgPaths.p59a8f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start leading-[normal] left-[59.02px] text-[#030303] text-center top-[1243px] w-[325px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`11-50 `}</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        band rank in the NIRF Innovation ranking 2025
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start leading-[normal] left-[749.02px] text-[#030303] text-center top-[1258px] w-[325px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        40,000
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        research papers published
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start leading-[normal] left-[404.02px] text-[#030303] text-center top-[1255px] w-[325px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        600+
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        patents filed
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start leading-[normal] left-[1104.02px] text-[#030303] text-center top-[1243px] w-[302px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        60+
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        student startups supported since 2007
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <div className="relative shrink-0 size-[211px]" data-name="DesignathonLogo1 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo14} />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[56px] p-[10px] top-[49px] transition-transform duration-300 hover:scale-105 cursor-pointer" role="button" tabIndex={0}>
      <Frame29 />
    </div>
  );
}

function Instagram() {
  return (
    <div className="absolute left-[76px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="Instagram" role="link" tabIndex={0}>
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <MdiInstagram className="relative shrink-0 size-[80px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute left-[191px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="Facebook" role="link" tabIndex={0}>
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <UilFacebook className="relative shrink-0 size-[80px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[307px] size-[95px] top-[956px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="X">
      <div className="overflow-clip relative rounded-[inherit] size-[95px]">
        <RiTwitterXFill className="absolute left-[8px] size-[80px] top-[8px]" />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

const Frame12 = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  return (
    <a ref={ref} className="absolute bg-[#232a91] block cursor-pointer h-[1232px] left-0 overflow-clip top-[4423px] w-[1515px]" href="https://x.com/ic_mahe?lang=en">
      <div className="absolute bg-[#fffffd] left-[76px] size-[210px] top-[69px]" />
      <Frame41 />
      <Instagram />
      <Facebook />
      <X />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[83px] not-italic text-[32px] text-white top-[431px] w-[785px]">Our centre is committed to fostering the growth and development of innovative ideas, regardless of discipline or background. We would be honoured to hear your concepts and support you in bringing them to fruition.</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[40px] text-white top-[335px] w-[785px]">Your Space. Our Future. Let's Build.</p>
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
    </a>
  );
});

function Group1() {
  return (
    <div className="absolute contents left-[521px] top-[2697px]">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[537px] text-[#030303] text-[24px] text-nowrap top-[2697px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. T.M.A. Pai
      </p>
      <div className="absolute left-[521px] size-[9px] top-[2706px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #FF730E)" id="Ellipse 1" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-[325px]">
      <p className="relative shrink-0 text-[#030303] text-[36px] w-full">Lifeathon 2.0</p>
      <p className="relative shrink-0 text-[#757575] text-[24px] w-full">30th July, 2025</p>
    </div>
  );
}

function Lifeathon20({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[30px] h-[542px] items-start left-[536px] px-[20px] py-[16px] top-[1718px] w-[440px] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" data-name="Lifeathon 2.0">
      <Frame9 />
      <div className="h-[388px] relative shrink-0 w-[400px]" data-name="LifathonB 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.94%] left-0 max-w-none top-[-26.97%] w-[261.45%]" src={imgLifathonB1} />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[66px] p-[10px] top-[211px] w-[114px]">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff730e] text-[40px] text-nowrap whitespace-pre">1/4</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[66px] p-[10px] top-[281px]">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232a91] text-[64px] text-nowrap whitespace-pre">Idea Café</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ededed] h-[1165px] overflow-clip relative shrink-0 w-[1320px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01030873041599989)+(var(--transform-inner-height)*0.9999468326568604)))] items-center justify-center left-[76px] top-[93.01px] w-[calc(1px*((var(--transform-inner-height)*0.01030873041599989)+(var(--transform-inner-width)*0.9999468326568604)))]" style={{ "--transform-inner-width": "96", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.409deg]">
          <div className="h-0 relative w-[96.005px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 7" stroke="var(--stroke-0, black)" x2="96.0052" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame16 />
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[186px] not-italic text-[#030303] text-[24px] text-nowrap top-[79px] whitespace-pre">What we offer</p>
      <Frame17 />
      <div className="absolute h-[486px] left-[81px] top-[572px] w-[1130px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[155.31%] left-0 max-w-none top-[-56.01%] w-full" src={imgRectangle22} />
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[81px] text-[#9f9f9f] text-[24px] top-[424px] w-[895px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        At the Idea Café, interdisciplinary teams can convene, network, and brainstorm complex problems. Our seminar and workshop sessions provide aspiring innovators and entrepreneurs with opportunities to learn about concepts, network and share their ideas.
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ededed] h-[1165px] overflow-clip relative shrink-0 w-[1320px]">
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[186px] not-italic text-[#030303] text-[24px] text-nowrap top-[79px] whitespace-pre">What we offer</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01030873041599989)+(var(--transform-inner-height)*0.9999468326568604)))] items-center justify-center left-[76px] top-[93.01px] w-[calc(1px*((var(--transform-inner-height)*0.01030873041599989)+(var(--transform-inner-width)*0.9999468326568604)))]" style={{ "--transform-inner-width": "96", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.409deg]">
          <div className="h-0 relative w-[96.005px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 7" stroke="var(--stroke-0, black)" x2="96.0052" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#ff730e] text-[40px] text-nowrap top-[221px] whitespace-pre">2/4</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#232a91] text-[64px] text-nowrap top-[291px] whitespace-pre">Makerspace</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[81px] text-[#9f9f9f] text-[24px] top-[424px] w-[895px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        At the Makerspace, we provide innovators with a variety of tools and equipment that they can use to develop proof-of-concept and working prototypes.
      </p>
      <div className="absolute h-[486px] left-[81px] top-[572px] w-[1130px]">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="Makerspace facility" className="absolute h-[174.38%] left-0 max-w-none top-[-30.42%] w-full" src={imgRectangle23} />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ededed] h-[1165px] overflow-clip relative shrink-0 w-[1320px]">
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[186px] not-italic text-[#030303] text-[24px] text-nowrap top-[79px] whitespace-pre">What we offer</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01030873041599989)+(var(--transform-inner-height)*0.9999468326568604)))] items-center justify-center left-[76px] top-[93.01px] w-[calc(1px*((var(--transform-inner-height)*0.01030873041599989)+(var(--transform-inner-width)*0.9999468326568604)))]" style={{ "--transform-inner-width": "96", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.409deg]">
          <div className="h-0 relative w-[96.005px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 7" stroke="var(--stroke-0, black)" x2="96.0052" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#ff730e] text-[40px] text-nowrap top-[221px] whitespace-pre">3/4</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#232a91] text-[64px] text-nowrap top-[291px] whitespace-pre">Apple Creative Studio</p>
      <div className="absolute h-[486px] left-[81px] top-[572px] w-[1130px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.69%] left-0 max-w-none top-[-61.21%] w-full" src={imgRectangle24} />
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[81px] text-[#9f9f9f] text-[24px] top-[424px] w-[895px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Innovation Centre houses a state-of-the-art Apple Creative Studio. A course on iOS Software development is offered here to both MIT students and non-MIT students.
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#ededed] h-[1165px] overflow-clip relative shrink-0 w-[1320px]">
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[186px] not-italic text-[#030303] text-[24px] text-nowrap top-[79px] whitespace-pre">What we offer</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01030873041599989)+(var(--transform-inner-height)*0.9999468326568604)))] items-center justify-center left-[76px] top-[93.01px] w-[calc(1px*((var(--transform-inner-height)*0.01030873041599989)+(var(--transform-inner-width)*0.9999468326568604)))]" style={{ "--transform-inner-width": "96", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.409deg]">
          <div className="h-0 relative w-[96.005px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 7" stroke="var(--stroke-0, black)" x2="96.0052" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#ff730e] text-[40px] text-nowrap top-[191px] whitespace-pre">4/4</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[65px] left-[76px] not-italic text-[#232a91] text-[64px] top-[261px] w-[982px]">Central Analytical Instrumentation Facility</p>
      <div className="absolute h-[486px] left-[81px] top-[572px] w-[1130px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[310.01%] left-[0.26%] max-w-none top-[-106.85%] w-full" src={imgRectangle25} />
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[76px] text-[#9f9f9f] text-[24px] top-[445px] w-[895px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Central Analytical Instrumentation Facility (CAIF) supporting multidisciplinary research by our faculty and students in emerging frontier fields.
      </p>
    </div>
  );
}

function Frame18() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-[1512px]">
      {/* Scroll Container with horizontal scroll enabled */}
      <div
        ref={scrollContainerRef}
        className="content-stretch flex gap-[24px] items-center overflow-x-auto overflow-y-clip relative shrink-0 w-[1512px] scroll-smooth"
      >
        <Frame11 />
        <Frame13 />
        <Frame14 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[10px] relative shrink-0 w-[1512px]">
      <Frame18 />
    </div>
  );
}

const Frame20 = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="absolute box-border content-stretch flex gap-[10px] items-start left-[3px] px-0 py-[10px] top-[2944px] w-[1512px]">
      <Frame19 />
    </div>
  );
});

function Frame44() {
  return (
    <div className="absolute h-[31px] left-[26px] top-[2928px] w-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 31">
        <g id="Frame 44">
          <ellipse cx="16" cy="15.5" fill="var(--fill-0, #FFFFFD)" id="Ellipse 2" rx="6" ry="5.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-[325px]">
      <p className="relative shrink-0 text-[#030303] text-[36px] w-full">BEcon 2025</p>
      <p className="relative shrink-0 text-[#757575] text-[24px] w-full">18th January, 2025</p>
    </div>
  );
}

function Frame92({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[30px] h-[542px] items-start left-[996px] px-[20px] py-[16px] top-[1718px] w-[440px] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <Frame21 />
      <div className="h-[388px] relative shrink-0 w-[400px]" data-name="Screenshot 2025-09-28 at 6.46.14 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250928At64614Pm1} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-[325px]">
      <p className="relative shrink-0 text-[#030303] text-[36px] w-full">Design2Deploy</p>
      <p className="relative shrink-0 text-[#757575] text-[24px] w-full">28th September, 2025</p>
    </div>
  );
}

function Lifeathon21({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[30px] h-[542px] items-start left-[76px] px-[20px] py-[16px] top-[1718px] w-[440px] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer" data-name="Lifeathon 2.0">
      <Frame10 />
      <div className="bg-[#d9d9d9] h-[388px] shrink-0 w-[400px]" />
    </div>
  );
}

function HomePage({
  onNavigateToAbout,
  onNavigateToVentures,
  onNavigateToEvents,
  onNavigateToVenturesForm,
  onNavigateToHome,
  onToggleMenu,
  scrollToWhatWeOffer,
  scrollToContact,
  onScrollToWhatWeOffer,
  onScrollToContact
}: {
  onNavigateToAbout: () => void;
  onNavigateToVentures: () => void;
  onNavigateToEvents: () => void;
  onNavigateToVenturesForm: () => void;
  onNavigateToHome: () => void;
  onToggleMenu: () => void;
  scrollToWhatWeOffer?: boolean;
  scrollToContact?: boolean;
  onScrollToWhatWeOffer: () => void;
  onScrollToContact: () => void;
}) {
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToWhatWeOffer && whatWeOfferRef.current) {
      setTimeout(() => {
        whatWeOfferRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [scrollToWhatWeOffer]);

  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [scrollToContact]);

  return (
    <div className="bg-[#fffffd] relative size-full min-h-[5655px]" data-name="MacBook Pro 14' - 2">
      <NavBar
        onNavigateToHome={onNavigateToHome}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToVentures={onNavigateToVentures}
        onNavigateToEvents={onNavigateToEvents}
        onScrollToWhatWeOffer={onScrollToWhatWeOffer}
        onScrollToContact={onScrollToContact}
        onToggleMenu={onToggleMenu}
        currentPage="home"
      />
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[770px] text-[#757575] text-[24px] top-[337px] w-[551px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`The Innovation Center, at MAHE, nurtures and encourages creativity, innovation and a culture of entrepreneurship among students, faculty, alumni, and citizens of the region. `}</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[1325px] text-[#757575] text-[24px] top-[2283px] w-[102px] transition-all duration-300 hover:text-[#232a91] cursor-pointer" style={{ fontVariationSettings: "'wdth' 100" }}>
        View All
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[716px] text-[#757575] text-[24px] text-nowrap top-[2697px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Founder, Manipal Academy of Higher Education
      </p>
      <Frame27 />
      <Frame2 onClick={onNavigateToVenturesForm} />
      <div className="absolute h-[288px] left-[421px] top-[853px] w-[325px] transition-transform duration-300 hover:scale-105 overflow-hidden">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle16} />
      </div>
      <div className="absolute h-[301px] left-[766px] top-[589px] w-[210px] transition-transform duration-300 hover:scale-105 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-54.52%] max-w-none top-[-0.29%] w-[191.11%]" src={imgRectangle14} />
        </div>
      </div>
      <Frame42 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[180px] leading-[normal] left-[406px] not-italic text-[#030303] text-[40px] top-[2474px] w-[920px]">One finger cannot do much. It is only when all the five fingers come together that we get strength and innovation.</p>
      <div className="absolute h-0 left-[59px] top-[1217px] w-[1360.04px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1361 1">
            <line id="Line 2" stroke="var(--stroke-0, #232A91)" x2="1360.04" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[59.02px] top-[1439px] w-[1360.04px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1361 1">
            <line id="Line 2" stroke="var(--stroke-0, #232A91)" x2="1360.04" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[394.02px] top-[1238px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[179px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 1">
                <line id="Line 4" stroke="var(--stroke-0, #232A91)" x2="179" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[739.02px] top-[1238px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[179px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 1">
                <line id="Line 4" stroke="var(--stroke-0, #232A91)" x2="179" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[1084.02px] top-[1238px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "179", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[179px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 1">
                <line id="Line 4" stroke="var(--stroke-0, #232A91)" x2="179" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <Frame12 />
      </div>
      <div className="absolute bg-[#232a91] left-[81px] size-[127px] top-[2474px]" />
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] h-[78px] leading-[normal] left-[120px] not-italic text-[128px] text-white top-[2499px] w-[49px]">"</p>
      <Group1 />
      <div className="absolute left-[406px] size-[63px] top-[2677px] transition-transform duration-300 hover:scale-110" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.88%] left-0 max-w-none top-[-4.92%] w-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[243px] left-[422px] top-[589px] w-[324px] transition-transform duration-300 hover:scale-105 overflow-hidden" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[552px] left-[76px] top-[589px] w-[325px] transition-transform duration-300 hover:scale-105 overflow-hidden" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[148.38%] left-[-3.76%] max-w-none top-[-25.32%] w-[116.3%]" src={imgImage3} />
        </div>
      </div>
      <div className="absolute h-[552px] left-[996px] top-[589px] w-[440px] transition-transform duration-300 hover:scale-105 overflow-hidden" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-33.18%] max-w-none top-0 w-[167.27%]" src={imgImage4} />
        </div>
      </div>
      <Lifeathon20 onClick={onNavigateToEvents} />
      <div className="absolute h-[232px] left-[766px] top-[909px] w-[210px] transition-transform duration-300 hover:scale-105 overflow-hidden" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.92%] left-[-0.06%] max-w-none top-[-21.12%] w-[100.12%]" src={imgImage5} />
        </div>
      </div>
      <div ref={whatWeOfferRef}>
        <Frame20 />
      </div>
      <Frame44 />
      <Frame92 onClick={onNavigateToEvents} />
      <Lifeathon21 onClick={onNavigateToEvents} />
    </div>
  );
}

// Custom hook to detect mobile screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default function App() {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "ventures" | "events">("home");
  const [showMenu, setShowMenu] = useState(false);
  const [scrollToWhatWeOffer, setScrollToWhatWeOffer] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);
  const [scrollToVenturesForm, setScrollToVenturesForm] = useState(false);

  const handleNavigateToHome = () => {
    setCurrentPage("home");
    setShowMenu(false);
  };

  const handleNavigateToAbout = () => {
    setCurrentPage("about");
    setShowMenu(false);
  };

  const handleNavigateToVentures = () => {
    setCurrentPage("ventures");
    setShowMenu(false);
    setScrollToVenturesForm(false);
  };

  const handleNavigateToVenturesForm = () => {
    setCurrentPage("ventures");
    setShowMenu(false);
    setScrollToVenturesForm(true);
  };

  const handleNavigateToEvents = () => {
    setCurrentPage("events");
    setShowMenu(false);
  };

  const handleScrollToWhatWeOffer = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setScrollToWhatWeOffer(true);
    setShowMenu(false);
  };

  const handleScrollToContact = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
    }
    setScrollToContact(true);
    setShowMenu(false);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Reset scroll flags when they've been used
  useEffect(() => {
    if (scrollToWhatWeOffer) {
      const timer = setTimeout(() => setScrollToWhatWeOffer(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [scrollToWhatWeOffer]);

  useEffect(() => {
    if (scrollToContact) {
      const timer = setTimeout(() => setScrollToContact(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [scrollToContact]);

  useEffect(() => {
    if (scrollToVenturesForm) {
      const timer = setTimeout(() => setScrollToVenturesForm(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [scrollToVenturesForm]);

  // Render mobile view on small screens
  if (isMobile) {
    return <MobileView />;
  }

  // Render desktop view on larger screens
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100">
      <div className="relative w-full h-full overflow-auto">
        <div className="min-w-[1516px] min-h-screen mx-auto bg-white">
          {currentPage === "about" && (
            <AboutUs
              onNavigateToHome={handleNavigateToHome}
              onNavigateToAbout={handleNavigateToAbout}
              onNavigateToVentures={handleNavigateToVentures}
              onNavigateToEvents={handleNavigateToEvents}
              onScrollToWhatWeOffer={handleScrollToWhatWeOffer}
              onScrollToContact={handleScrollToContact}
              onToggleMenu={handleToggleMenu}
            />
          )}

          {currentPage === "ventures" && (
  <MacBookPro143
    onNavigateToHome={handleNavigateToHome}
    onNavigateToAbout={handleNavigateToAbout}
    onNavigateToVentures={handleNavigateToVentures}
    onNavigateToEvents={handleNavigateToEvents}
    onScrollToWhatWeOffer={handleScrollToWhatWeOffer}
    onScrollToContact={handleScrollToContact}
    onToggleMenu={handleToggleMenu}
    scrollToForm={scrollToVenturesForm}
  />
)}

          {currentPage === "events" && (
            <Events
              onNavigateToHome={handleNavigateToHome}
              onNavigateToAbout={handleNavigateToAbout}
              onNavigateToVentures={handleNavigateToVentures}
              onNavigateToEvents={handleNavigateToEvents}
              onScrollToWhatWeOffer={handleScrollToWhatWeOffer}
              onScrollToContact={handleScrollToContact}
              onToggleMenu={handleToggleMenu}
            />
          )}

          {currentPage === "home" && (
            <HomePage
              onNavigateToAbout={handleNavigateToAbout}
              onNavigateToVentures={handleNavigateToVentures}
              onNavigateToEvents={handleNavigateToEvents}
              onNavigateToVenturesForm={handleNavigateToVenturesForm}
              onNavigateToHome={handleNavigateToHome}
              onToggleMenu={handleToggleMenu}
              scrollToWhatWeOffer={scrollToWhatWeOffer}
              scrollToContact={scrollToContact}
              onScrollToWhatWeOffer={handleScrollToWhatWeOffer}
              onScrollToContact={handleScrollToContact}
            />
          )}

          {showMenu && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#232a91]">
              <div className="w-[1516px] h-[90vh] overflow-auto">
                <Menu
                  onClose={handleToggleMenu}
                  onNavigateToAbout={handleNavigateToAbout}
                  onNavigateToVentures={handleNavigateToVentures}
                  onScrollToWhatWeOffer={handleScrollToWhatWeOffer}
                  onScrollToContact={handleScrollToContact}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
