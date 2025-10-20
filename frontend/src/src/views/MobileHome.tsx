import React, { useEffect, useRef } from 'react';
import svgPaths from "../../imports/svg-bdszfuluo1";
import imgLifathonB1 from "figma:asset/994c5781b272388d8608a6c3dad852c2d6f63bf7.png";
import imgScreenshot20250928At64614Pm2 from "figma:asset/47d16a167ec1dc3c4d9aef446618b30cbe17c610.png";
import imgDesignathonLogo6 from "figma:asset/eebe37ed6d2357932d4cebae730b760f273d0887.png";
import imgRectangle22 from "figma:asset/d23dde0bbd5bc5e6a8395754fa02fc2b23b6e5bf.png";
import imgRectangle23 from "figma:asset/60a2f6e99965a9a3ec9e5393a4683653b184c80c.png";
import imgImage6 from "figma:asset/69a36934ba3ae9c6f8a1f1461fd7426b8ed8228b.png";
import imgImage7 from "figma:asset/17ed33bb30e73044470782b256cd0c3b146981df.png";
import imgImage8 from "figma:asset/3c1f3a38ce34f2226de5a515e9e560481961ef08.png";
import imgImage9 from "figma:asset/fced1c2bb6415e9d52140a3b9d55e9810221b3f2.png";
import imgImage10 from "figma:asset/71055bc967b76ac7f773c096c996b3edea657376.png";
import imgDesignathonLogo14 from "figma:asset/c8c25111aa5700a4e734477275eb7665d77dd629.png";
import Frame130 from "../../imports/Frame130";
import Frame131 from "../../imports/Frame131";
import Frame132 from "../../imports/Frame132";
import Frame133 from "../../imports/Frame133";
import JoinNowButton from "../components/JoinNowButton";

function MdiHamburgerMenu({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute left-[330px] size-[37px] top-[29px] cursor-pointer" data-name="mdi:hamburger-menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="mdi:hamburger-menu">
          <path d={svgPaths.p59a8f00} fill="#232A91" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
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

function Frame93({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#232a91] box-border content-stretch flex gap-[10px] items-start left-[20px] overflow-clip p-[4px] top-[403px] w-[350px] cursor-pointer hover:opacity-90 transition-opacity">
      <Frame3 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[34px] text-[#030303] text-center top-[816px] w-[130px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        600+
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        patents filed
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[231px] text-[#030303] text-center top-[733px] w-[124px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        40,000
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        research papers published
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[231px] text-[#030303] text-center top-[812px] w-[124px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        60+
      </p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        student startups supported since 2007
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[34px] text-[#030303] text-center top-[733px] w-[130px]">
      <p className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`51-100 `}</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        band rank in the NIRF Innovation ranking 2023
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[20px] p-[10px] top-[918px]">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[24px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#030303] text-[20px] w-full">Design2Deploy</p>
      <p className="relative shrink-0 text-[#757575] text-[12px] w-full">28th September, 2025</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[338px] items-start relative shrink-0 w-[350px]">
      <Frame99 />
      <div className="bg-[#d9d9d9] h-[228px] shrink-0 w-[350px]" />
    </div>
  );
}

function Frame101({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[10px] h-[355px] items-start left-[20px] px-0 py-[17px] top-[979px] w-[350px] cursor-pointer hover:opacity-90 transition-opacity">
      <Frame100 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#030303] text-[20px] w-full">Lifeathon 2.0</p>
      <p className="relative shrink-0 text-[#757575] text-[12px] w-full">30th July, 2025</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[338px] items-start relative shrink-0 w-[350px]">
      <Frame106 />
      <div className="aspect-[352/225] relative shrink-0 w-full" data-name="LifathonB 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[233.3%] left-[0.3%] max-w-none top-[-56.13%] w-[261.45%]" src={imgLifathonB1} />
        </div>
      </div>
    </div>
  );
}

function Frame102({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[10px] h-[355px] items-start left-[21px] px-0 py-[17px] top-[1370px] w-[350px] cursor-pointer hover:opacity-90 transition-opacity">
      <Frame107 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] items-start leading-[normal] not-italic pb-[3px] pt-0 px-0 relative shrink-0 w-full">
      <p className="relative shrink-0 text-[#030303] text-[20px] w-full">BEcon2025</p>
      <p className="relative shrink-0 text-[#757575] text-[12px] w-full">18th January, 2025</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[338px] items-start relative shrink-0 w-[350px]">
      <Frame108 />
      <div className="h-[224px] relative shrink-0 w-[349px]" data-name="Screenshot 2025-09-28 at 6.46.14 PM 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20250928At64614Pm2} />
      </div>
      <div className="aspect-[352/225] shrink-0 w-full" data-name="LifathonB 1" />
    </div>
  );
}

function Frame103({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#ededed] box-border content-stretch flex flex-col gap-[10px] h-[355px] items-start left-[21px] px-0 py-[17px] top-[1761px] w-[350px] cursor-pointer hover:opacity-90 transition-opacity">
      <Frame109 />
    </div>
  );
}

function Frame97({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[283px] p-[10px] top-[926px] cursor-pointer hover:opacity-70 transition-opacity">
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] text-[10px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        View All Events
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[114.58px] top-[2372.89px]">
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal h-[14.526px] leading-[normal] left-[144.84px] text-[#030303] text-[10px] top-[2372.89px] w-[71.421px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. T.M.A. Pai
      </p>
      <div className="absolute left-[114.58px] size-[10.895px] top-[2374.11px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <circle cx="5.44737" cy="5.44737" fill="var(--fill-0, #FF730E)" id="Ellipse 1" r="5.44737" />
        </svg>
      </div>
    </div>
  );
}

function MdiInstagram() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="mdi:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="mdi:instagram">
          <path d={svgPaths.p2b7bd300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <a className="absolute cursor-pointer left-[32px] top-[850px] hover:opacity-80 transition-opacity" data-name="Instagram" href="https://www.instagram.com/innovationcentremahe/" target="_blank" rel="noopener noreferrer">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <MdiInstagram />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </a>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[20px] top-[23px]">
      <div className="absolute bg-white h-[74px] left-[20px] top-[23px] w-[73px]" />
      <div className="absolute left-[22px] size-[70.652px] top-[26px]" data-name="DesignathonLogo1 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo14} />
      </div>
    </div>
  );
}

function UilFacebook() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="uil:facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="uil:facebook">
          <path d={svgPaths.p1377a800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <a className="absolute cursor-pointer left-[117px] top-[850px] hover:opacity-80 transition-opacity" data-name="Facebook" href="https://www.facebook.com/innovationcentermanipal/" target="_blank" rel="noopener noreferrer">
      <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[7px] relative rounded-[inherit]">
        <UilFacebook />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </a>
  );
}

function RiTwitterXFill() {
  return (
    <div className="absolute left-[8px] size-[56px] top-[7px]" data-name="ri:twitter-x-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="ri:twitter-x-fill">
          <path d={svgPaths.p33f27f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <a className="absolute h-[70px] left-[202px] top-[850px] w-[72px] hover:opacity-80 transition-opacity cursor-pointer" data-name="X" href="https://x.com/ic_mahe?lang=en" target="_blank" rel="noopener noreferrer">
      <div className="h-[70px] overflow-clip relative rounded-[inherit] w-[72px]">
        <RiTwitterXFill />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </a>
  );
}

const Frame104 = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="absolute bg-[#232a91] h-[1040px] left-0 overflow-clip top-[3000px] w-[389px]">
      <Instagram />
      <Group18 />
      <Facebook />
      <X />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[16px] text-white top-[222px] w-[290px]">Our centre is committed to fostering the growth and development of innovative ideas, regardless of discipline or background. We would be honoured to hear your concepts and support you in bringing them to fruition.</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[20px] text-white top-[180px] w-[355px]">Your Space. Our Future. Let's Build.</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[26px] text-[20px] text-nowrap text-white top-[446px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[26px] text-[20px] text-nowrap text-white top-[500px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Mohammed Zuber
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[26px] text-[16px] text-nowrap text-white top-[534px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chief Innovation Officer, MAHE
      </p>
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[normal] left-[26px] text-[16px] text-nowrap text-white top-[564px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email : cio.mahe@manipal.edu
      </p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[26px] text-[20px] text-nowrap text-white top-[648px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Shreelaxmi Prashant
      </p>
      <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[26px] text-[16px] text-white top-[682px] w-[227px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Associate Professor, Department of Civil Engineering</p>
        <p>Assistant Director (Innovation and Incubation), MIT, Manipal - 576104</p>
      </div>
      <p className="absolute font-['Roboto:Bold',_sans-serif] font-bold leading-[normal] left-[26px] text-[16px] text-nowrap text-white top-[788px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email: innovation@manipal.edu
      </p>
    </div>
  );
});

interface MobileHomeProps {
  onToggleMenu: () => void;
  onNavigateToVentures: () => void;
  onNavigateToEvents?: () => void;
  scrollToPrograms?: boolean;
  scrollToContact?: boolean;
}

export default function MobileHome({ onToggleMenu, onNavigateToVentures, onNavigateToEvents, scrollToPrograms, scrollToContact }: MobileHomeProps) {
  const programsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToPrograms && programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [scrollToPrograms]);

  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [scrollToContact]);

  return (
    <div className="bg-white relative w-full min-h-screen" data-name="iPhone 13 & 14 - 1">
      <div className="absolute left-[13px] size-[95px] top-[18px]" data-name="DesignathonLogo 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo6} />
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[20px] not-italic text-[#030303] text-[24px] top-[208px] w-[334px]">Where big dreams and ideas belong. What's your next idea?</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[20px] text-[#757575] text-[12px] top-[325px] w-[349px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`The Innovation Center, at MAHE, nurtures and encourages creativity, innovation and a culture of entrepreneurship among students, faculty, alumni, and citizens of the region. `}</p>
      <MdiHamburgerMenu onClick={onToggleMenu} />
      <Frame93 onClick={onNavigateToVentures} />
      <div className="absolute h-[118px] left-[137px] top-[564px] w-[83px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle22} />
      </div>
      <div className="absolute h-[107px] left-[225px] top-[496px] w-[67px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-54.52%] max-w-none top-[-0.29%] w-[191.11%]" src={imgRectangle23} />
        </div>
      </div>
      <div className="absolute h-[62px] left-[137px] top-[496px] w-[83px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[188px] left-[20px] top-[496px] w-[111px]" data-name="image 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[148.38%] left-[-3.76%] max-w-none top-[-25.32%] w-[116.3%]" src={imgImage7} />
        </div>
      </div>
      <div className="absolute h-[186px] left-[297px] top-[496px] w-[72px]" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-99.22%] max-w-none top-0 w-[346.16%]" src={imgImage8} />
        </div>
      </div>
      <div className="absolute h-[75px] left-[224px] top-[607px] w-[68px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160.92%] left-[-0.06%] max-w-none top-[-21.12%] w-[100.12%]" src={imgImage9} />
        </div>
      </div>
      <Frame95 />
      <Frame94 />
      <Frame96 />
      <Frame98 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[195px] top-[727px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "150", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[150px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 1">
                <line id="Line 7" stroke="var(--stroke-0, #232A91)" x2="150" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame105 />
      <Frame101 onClick={onNavigateToEvents} />
      <Frame102 onClick={onNavigateToEvents} />
      <Frame103 onClick={onNavigateToEvents} />
      <div className="absolute bg-[#232a91] left-[20px] size-[110px] top-[2223px]" />
      <Frame97 onClick={onNavigateToEvents} />
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] h-[78px] leading-[normal] left-[50px] not-italic text-[128px] text-white top-[2239px] w-[49px]">"</p>
      <Group2 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[162px] leading-[normal] left-[160px] not-italic text-[#030303] text-[16px] top-[2223px] w-[210px]">One finger cannot do much. It is only when all the five fingers come together that we get strength and innovation.</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal h-[15px] leading-[normal] left-[115px] text-[#757575] text-[10px] top-[2393px] w-[255px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Founder, Manipal Academy of Higher Education
      </p>
      <div className="absolute left-[56px] size-[46px] top-[2362px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.88%] left-0 max-w-none top-[-4.92%] w-full" src={imgImage10} />
        </div>
      </div>

      {/* Horizontal Scroll Section - What We Offer */}
      <div ref={programsRef} className="absolute left-0 top-[2450px] w-full overflow-x-auto overflow-y-hidden">
        <div className="flex gap-4 px-5 pb-4">
          <div className="flex-shrink-0 w-[349px] h-[435px]">
            <Frame130 />
          </div>
          <div className="flex-shrink-0 w-[349px] h-[435px]">
            <Frame131 />
          </div>
          <div className="flex-shrink-0 w-[349px] h-[435px]">
            <Frame132 />
          </div>
          <div className="flex-shrink-0 w-[349px] h-[435px]">
            <Frame133 />
          </div>
        </div>
      </div>

      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5441455245018005)+(var(--transform-inner-height)*0.8389908671379089)))] items-center justify-center left-[20px] top-[1073px] w-[calc(1px*((var(--transform-inner-height)*0.5441455245018005)+(var(--transform-inner-width)*0.8389908671379089)))]" style={{ "--transform-inner-width": "417.15625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[32.966deg]">
          <div className="h-0 relative w-[417.168px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 1">
                <line id="Line 10" stroke="var(--stroke-0, black)" x2="417.168" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5441455245018005)+(var(--transform-inner-height)*0.8389908671379089)))] items-center justify-center left-[20px] top-[1073px] w-[calc(1px*((var(--transform-inner-height)*0.5441455245018005)+(var(--transform-inner-width)*0.8389908671379089)))]" style={{ "--transform-inner-width": "417.15625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[147.034deg]">
          <div className="h-0 relative w-[417.168px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 418 1">
                <line id="Line 11" stroke="var(--stroke-0, black)" x2="417.168" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame104 ref={contactRef} />
    </div>
  );
}
