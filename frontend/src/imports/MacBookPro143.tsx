import React, { useRef, useState } from "react";
import svgPaths from "./svg-fgiw4eqb1";
import imgImage17 from "figma:asset/db9a46be7e0fcb4b79f21311f865a0d46e4f6c6e.png";
import imgImage18 from "figma:asset/08a3f01587143eb51baf3f7d818f84ddc317aca0.png";
import imgImage20 from "figma:asset/5b77d8963a94baf32f677c2b978a0b4a6c717cd9.png";
import imgImage7 from "figma:asset/51b1990003e93ebf10abbf6181a1bb2c00aa4b0b.png";
import imgImage25 from "figma:asset/677125ac626186e0f92ef4a6b41ae0ff69847a38.png";
import imgImage13 from "figma:asset/4360f5f61d1ef91910f0579030d8b62349a049d7.png";
import imgImage22 from "figma:asset/eba18efe4cc90341370be1c7bad3e1cb86320969.png";
import imgImage24 from "figma:asset/d9c0cb2b42758f7b089657c8a47f7035f3af322f.png";
import imgDesignathonLogo14 from "figma:asset/c8c25111aa5700a4e734477275eb7665d77dd629.png";
import imgImage6 from "figma:asset/1339e1ad02c6866b5b89a1f2ba2bea5cb756eea3.png";
import imgImage8 from "figma:asset/ed5c20b3cbeddc695b1c4bcbb0b5b6f3a331888e.png";
import imgImage9 from "figma:asset/1a89c511fec936e5b6d08d17a9ba1c591d5b12a8.png";
import imgImage10 from "figma:asset/c6d689a44f2079b5edd3f2a8e8f754e608a011bc.png";
import imgImage11 from "figma:asset/38f9a34fcd5403b8a12ebc2b394ca424b1022c2d.png";
import imgImage12 from "figma:asset/efc725b4fea09baa9dc30d4fa012d18416749a25.png";
import imgImage14 from "figma:asset/9387c344507414bd7591da50b4f1b3e206c676b7.png";
import imgImage15 from "figma:asset/d2b1b9ef1201a4c81c7f6628e2b1aa12a54ae05d.png";
import imgImage19 from "figma:asset/67896038d162374afc49f73edcd696bb915d3777.png";
import imgDesignathonLogo5 from "figma:asset/eebe37ed6d2357932d4cebae730b760f273d0887.png";
import imgImage16 from "figma:asset/e70f58f6649d6ab6f833e6e2d9b7ae0697f8314d.png";

/** ===== minimal API helper (no visual impact) ===== */
const API_BASE =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? `${window.location.origin}/api` : "/api");

async function safeJson(res: Response) {
  try { return await res.json(); } catch { return null; }
}

/** ===== your existing components (unchanged visually) ===== */

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame46() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            T2RS PVT LTD
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame45 />
      <Frame46 />
    </div>
  );
}
function Frame83() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[87px] overflow-visible px-[43px] py-[22px] size-[209px] top-[966px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="http://www.t2rs.com">
      <Frame47 />
    </a>
  );
}
function Group5() {
  return (
    <div className="absolute contents left-[87px] top-[966px]">
      <Frame83 />
    </div>
  );
}
function Frame53() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[250px] shrink-0 size-[103px]" data-name="image 17">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[250px] size-full" src={imgImage17} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Red Mountain Healthcare
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame53 />
      <Frame54 />
    </div>
  );
}
function Frame49() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[317px] overflow-visible px-[43px] py-[22px] size-[209px] top-[632px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://redmountain.co.in/">
      <Frame57 />
    </a>
  );
}
function Group9() {
  return (
    <div className="absolute contents left-[317px] top-[632px]">
      <Frame49 />
    </div>
  );
}
function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            DoubtConnect
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame58 />
      <Frame59 />
    </div>
  );
}
function Frame50() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[546px] overflow-visible px-[43px] py-[22px] size-[209px] top-[632px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://doubtconnect.in/">
      <Frame60 />
    </a>
  );
}
function Group10() {
  return (
    <div className="absolute contents left-[599px] top-[664px]">
      <div className="absolute left-[599px] rounded-[510px] size-[103px] top-[664px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[510px] size-full" src={imgImage18} />
      </div>
    </div>
  );
}
function Group18() {
  return (
    <div className="absolute contents left-[546px] top-[632px]">
      <Frame50 />
      <Group10 />
    </div>
  );
}
function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[540px] shrink-0 size-[103px]" data-name="image 20">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[540px] size-full" src={imgImage20} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame62() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Kraftr
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame61 />
      <Frame62 />
    </div>
  );
}
function Frame66() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[87px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1300px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://www.kraftrlyfstyle.com/">
      <Frame63 />
    </a>
  );
}
function Group4() {
  return (
    <div className="absolute contents left-[87px] top-[1300px]">
      <Frame66 />
    </div>
  );
}
function Frame64() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[79.5px] shrink-0 size-[101px]" data-name="image 7">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[79.5px]">
              <img alt="" className="absolute left-[-12.58%] max-w-none size-[125.79%] top-[-15.09%]" src={imgImage7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame65() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bambus Energia
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame64 />
      <Frame65 />
    </div>
  );
}
function Frame74() {
  return (
    <div className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch flex gap-[10px] items-center left-[544px] px-[43px] py-[22px] size-[209px] top-[1634px] transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <Frame69 />
    </div>
  );
}
function Group15() {
  return (
    <div className="absolute contents left-[544px] top-[1634px]">
      <Frame74 />
    </div>
  );
}
function Group14() {
  return (
    <a className="absolute contents cursor-pointer left-[544px] top-[1634px]" href="https://www.linkedin.com/company/bambus-energia/about/">
      <Group15 />
    </a>
  );
}
function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white ml-0 mt-0 rounded-[51.5px] size-[103px]" />
      <div className="[grid-area:1_/_1] ml-[3px] mt-[3px] relative rounded-[49px] size-[98px]" data-name="image 25">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[49px]">
          <img alt="" className="absolute h-[100.61%] left-[-17.42%] max-w-none top-[-0.66%] w-[141.1%]" src={imgImage25} />
        </div>
      </div>
    </div>
  );
}
function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <Group19 />
        </div>
      </div>
    </div>
  );
}
function Frame71() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>{`Navmarg `}</p>
        </div>
      </div>
    </div>
  );
}
function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame70 />
      <Frame71 />
    </div>
  );
}
function Frame75() {
  return (
    <div className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch flex gap-[10px] items-center left-[87px] px-[43px] py-[22px] size-[209px] top-[1634px] transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <Frame72 />
    </div>
  );
}
function Group20() {
  return (
    <div className="absolute contents left-[87px] top-[1634px]">
      <Frame75 />
    </div>
  );
}
function Group17() {
  return (
    <a className="absolute contents cursor-pointer left-[87px] top-[1634px]" href="https://navmarg.in/">
      <Group20 />
    </a>
  );
}
function Frame76() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[50px] shrink-0 size-[100px]" data-name="image 13">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgImage13} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame77() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bugbase
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame76 />
      <Frame77 />
    </div>
  );
}
function Frame79() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[315px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1968px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://bugbase.ai/">
      <Frame81 />
    </a>
  );
}
function Frame84() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[120px] shrink-0 size-[103px]" data-name="image 22">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[120px] size-full" src={imgImage22} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame85() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Allmity
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame84 />
      <Frame85 />
    </div>
  );
}
function Frame80() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[544px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1968px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://devpost.com/software/allmity">
      <Frame86 />
    </a>
  );
}
function Frame87() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative rounded-[100px] shrink-0 size-[103px]" data-name="image 24">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage24} />
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame88() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Instrumus
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame87 />
      <Frame88 />
    </div>
  );
}
function Frame82() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[774px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1968px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://instrumus.com/">
      <Frame89 />
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
function Frame41() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[55px] p-[10px] top-[48px]">
      <Frame28 />
    </div>
  );
}
function Frame44() {
  return (
    <a className="absolute bg-[#232a91] block cursor-pointer h-[1232px] left-[-3px] overflow-clip top-[2970px] w-[1515px]" href="https://x.com/ic_mahe?lang=en">
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
      <Frame41 />
    </a>
  );
}
function Frame90() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame91() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Aion Health Solutions
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame90 />
      <Frame91 />
    </div>
  );
}
function Frame48() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[87px] overflow-visible px-[43px] py-[22px] size-[209px] top-[632px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://www.linkedin.com/company/aionhealth/?originalSubdomain=in">
      <Frame92 />
    </a>
  );
}
function Group8() {
  return (
    <div className="absolute contents left-[87px] top-[632px]">
      <Frame48 />
      <div className="absolute left-[140px] rounded-[100px] size-[103px] top-[664px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage6} />
      </div>
    </div>
  );
}
function Frame94() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame95() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            DotFood
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame94 />
      <Frame95 />
    </div>
  );
}
function Frame78() {
  return (
    <div className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch flex gap-[10px] items-center left-[85px] px-[43px] py-[22px] size-[209px] top-[1968px] transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <Frame96 />
    </div>
  );
}
function Group16() {
  return (
    <a className="absolute contents cursor-pointer left-[85px] top-[1968px]" href="https://www.instagram.com/dotfoodapp/">
      <Frame78 />
      <div className="absolute left-[138px] rounded-[49px] size-[103px] top-[2000px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[49px] size-full" src={imgImage8} />
      </div>
    </a>
  );
}
function Frame97() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame98() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Vennbrd
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame97 />
      <Frame98 />
    </div>
  );
}
function Frame67() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[317px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1300px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://vennbrd.com/">
      <Frame99 />
    </a>
  );
}
function Group2() {
  return (
    <div className="absolute contents left-[317px] top-[1300px]">
      <Frame67 />
      <div className="absolute left-[370px] rounded-[48px] size-[103px] top-[1332px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[48px] size-full" src={imgImage9} />
      </div>
    </div>
  );
}
function Frame100() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame101() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            SaiphiaDUS
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame100 />
      <Frame101 />
    </div>
  );
}
function Frame55() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[317px] overflow-visible px-[43px] py-[22px] size-[209px] top-[966px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://www.saiphia.com/">
      <Frame102 />
    </a>
  );
}
function Group6() {
  return (
    <div className="absolute contents left-[317px] top-[966px]">
      <Frame55 />
      <div className="absolute left-[370px] size-[103px] top-[998px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}
function Frame103() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame104() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mannkare
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame103 />
      <Frame104 />
    </div>
  );
}
function Frame68() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[546px] overflow-visible px-[43px] py-[22px] size-[209px] top-[1300px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://www.mannkare.com/">
      <Frame105 />
    </a>
  );
}
function Group3() {
  return (
    <div className="absolute contents left-[546px] top-[1300px]">
      <Frame68 />
      <div className="absolute left-[600px] rounded-[51.5px] size-[103px] top-[1332px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[51.5px]">
          <img alt="" className="absolute h-[107.84%] left-[-13.71%] max-w-none top-[-3.76%] w-[125.23%]" src={imgImage11} />
        </div>
      </div>
    </div>
  );
}
function Frame106() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame107() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Flying Electronics
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame106 />
      <Frame107 />
    </div>
  );
}
function Frame56() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[546px] overflow-visible px-[43px] py-[22px] size-[209px] top-[966px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://flyingelectronics.com/">
      <Frame108 />
    </a>
  );
}
function Group7() {
  return (
    <div className="absolute contents left-[546px] top-[966px]">
      <Frame56 />
      <div className="absolute left-[601px] rounded-[160.5px] size-[103px] top-[998px]" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[160.5px]">
          <img alt="" className="absolute h-[145.99%] left-[-159.16%] max-w-none top-[-12.12%] w-[303.9%]" src={imgImage12} />
        </div>
      </div>
    </div>
  );
}
function Frame109() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame110() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ripple Technologies
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame109 />
      <Frame110 />
    </div>
  );
}
function Frame73() {
  return (
    <div className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch flex gap-[10px] items-center left-[315px] px-[43px] py-[22px] size-[209px] top-[1634px] transition-all duration-300 hover:scale-105 hover:shadow-lg group">
      <Frame111 />
    </div>
  );
}
function Group13() {
  return (
    <a className="absolute contents cursor-pointer left-[315px] top-[1634px]" href="https://www.linkedin.com/company/rippletechcompany/about/">
      <Frame73 />
      <div className="absolute left-[368px] rounded-[100px] size-[103px] top-[1666px]" data-name="image 14">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage14} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage14} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgImage14} />
        </div>
      </div>
    </a>
  );
}
function Frame112() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame113() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            THAPY
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame112 />
      <Frame113 />
    </div>
  );
}
function Frame52() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[1008px] overflow-visible px-[43px] py-[22px] size-[209px] top-[632px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://www.thapy.in/">
      <Frame114 />
    </a>
  );
}
function Group12() {
  return (
    <div className="absolute contents left-[1008px] top-[632px]">
      <Frame52 />
      <div className="absolute left-[1061px] rounded-[100px] size-[103px] top-[664px]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage15} />
      </div>
    </div>
  );
}
function Frame115() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative w-full">
          <div className="relative shrink-0 size-[103px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <circle cx="51.5" cy="51.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="51.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
function Frame116() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#757575] group-hover:text-[#FFFFFD] text-[18px] text-nowrap whitespace-pre transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
            Expify
          </p>
        </div>
      </div>
    </div>
  );
}
function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-[123px]">
      <Frame115 />
      <Frame116 />
    </div>
  );
}
function Frame51() {
  return (
    <a className="absolute bg-[#ededed] hover:bg-[#232A91] box-border content-stretch cursor-pointer flex gap-[10px] items-center left-[777px] overflow-visible px-[43px] py-[22px] size-[209px] top-[632px] transition-all duration-300 hover:scale-105 hover:shadow-lg group" href="https://expify.in/">
      <Frame117 />
    </a>
  );
}
function Group11() {
  return (
    <div className="absolute contents left-[777px] top-[632px]">
      <Frame51 />
      <div className="absolute left-[830px] rounded-[100px] size-[103px] top-[664px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage19} />
      </div>
    </div>
  );
}
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
function VenturesNavItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[810px] p-[10px] top-[79px] transition-all duration-300 hover:scale-110 cursor-pointer">
      <p className="font-['Share_Tech:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[20px] text-nowrap whitespace-pre">Ventures</p>
    </div>
  );
}
function Frame93() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[76px] p-[10px] top-[2348px]">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#030303] text-[42px] w-[555px]">Want to turn your ideas into reality and create impact? Let’s innovate together!</p>
    </div>
  );
}
function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[6px] relative w-full">
          <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fffffd] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Submit
          </p>
        </div>
      </div>
    </div>
  );
}

/** ====== changed: Frame118 accepts onClick; visually identical ====== */
function Frame118({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  return (
    <a
      className="absolute bg-[#232a91] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[1296px] overflow-clip p-[4px] top-[2766px] w-[138px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
      href="https://www.ecellmit.in/"
      onClick={onClick}
    >
      <Frame3 />
    </a>
  );
}

/** ===================== PAGE ===================== */

export default function MacBookPro143({
  onNavigateToHome,
  onNavigateToAbout,
  onNavigateToVentures,
  onNavigateToEvents,
  onScrollToWhatWeOffer,
  onScrollToContact,
  onToggleMenu,
  scrollToForm
}: {
  onNavigateToHome: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToVentures?: () => void;
  onNavigateToEvents?: () => void;
  onScrollToWhatWeOffer?: () => void;
  onScrollToContact?: () => void;
  onToggleMenu?: () => void;
  scrollToForm?: boolean;
}) {
  /** refs so we don't convert your inputs to controlled fields */
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const ideaRef = useRef<HTMLTextAreaElement>(null);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault(); // keep layout, prevent navigation
    if (sending) return;

    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const idea = ideaRef.current?.value?.trim() || "";

    setMsg(null);
    if (!name || !email || !idea) {
      setMsg({ type: "err", text: "Please fill your name, email and idea." });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`${API_BASE}/ideas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, idea })
      });
      if (!res.ok) {
        const body = await safeJson(res);
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      setMsg({ type: "ok", text: "Thanks! Your idea was submitted." });
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (ideaRef.current) ideaRef.current.value = "";
    } catch (err: any) {
      setMsg({ type: "err", text: err?.message || "Submission failed." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 3">
      {/* Navigation Bar */}
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
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[76px] not-italic text-[#030303] text-[124px] text-nowrap top-[255px] whitespace-pre">Ventures</p>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[86px] not-italic text-[#030303] text-[24px] text-nowrap top-[587px] whitespace-pre">Health and Learning</p>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[86px] not-italic text-[#030303] text-[24px] text-nowrap top-[921px] whitespace-pre">{`Industrial & Robotics`}</p>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[86px] not-italic text-[#030303] text-[24px] text-nowrap top-[1255px] whitespace-pre">{`Consumer & Lifestyle`}</p>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[87px] not-italic text-[#030303] text-[24px] text-nowrap top-[1589px] whitespace-pre">{`Sustainabilty & AgriTech`}</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[651px] text-[#757575] text-[24px] top-[313px] w-[785px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        At the Innovation Center, we encourage students to explore the power of entrepreneurial thinking, creativity and innovation to build a better future. From initial concepts to market leaders, these ventures demonstrate the real-world impact generated by the centre’s community alongside the ecosystem of resources, mentorship and funding opportunities.
      </p>
      <Group5 />
      <Group9 />
      <Group18 />
      <Group4 />
      <Group14 />
      <Group17 />
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[87px] not-italic text-[#030303] text-[24px] text-nowrap top-[1923px] whitespace-pre">{`AI , SaaS & Fintech`}</p>
      <Frame79 />
      <Frame80 />
      <Frame82 />
      <Frame44 />
      <div onClick={onNavigateToHome} className="absolute left-[76px] size-[137px] top-[43px] transition-transform duration-300 hover:scale-105 cursor-pointer" data-name="DesignathonLogo 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignathonLogo5} />
      </div>
      <Group8 />
      <Group16 />
      <Group2 />
      <Group6 />
      <Group3 />
      <Group7 />
      <Group13 />
      <Group12 />
      <div className="absolute left-[140px] rounded-[100px] size-[103px] top-[998px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage16} />
      </div>
      <Group11 />
      <MdiHamburgerMenu />
      <Frame93 />

      {/* --- form copy (unchanged positions) but now uses refs --- */}
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[86px] not-italic text-[#030303] text-[24px] top-[2620px] w-[555px]">
        <p className="mb-0">Type in your pitch, from rough ideas to polished versions, all are welcome!</p>
        <p>Our team will get back to you soon.</p>
      </div>

      <textarea
        placeholder="Type Here..."
        className="absolute h-[198px] left-[651px] top-[2530px] w-[785px] border border-[#232a91] border-solid bg-transparent font-['Poppins:Regular',_sans-serif] text-[20px] text-black p-[26px] resize-none focus:outline-none focus:border-[#FF730E] transition-colors"
        ref={ideaRef}
        aria-label="Your idea"
      />
      <input
        type="email"
        placeholder="Email"
        className="absolute h-[65px] left-[651px] top-[2441px] w-[785px] border border-[#232a91] border-solid bg-transparent font-['Poppins:Regular',_sans-serif] text-[20px] text-black px-[26px] focus:outline-none focus:border-[#FF730E] transition-colors"
        ref={emailRef}
        aria-label="Email"
      />
      <input
        type="text"
        placeholder="Name"
        className="absolute h-[65px] left-[649px] top-[2358px] w-[785px] border border-[#232a91] border-solid bg-transparent font-['Poppins:Regular',_sans-serif] text-[20px] text-black px-[26px] focus:outline-none focus:border-[#FF730E] transition-colors"
        ref={nameRef}
        aria-label="Name"
      />

      {/* Submit anchor (looks identical). We just intercept click */}
      <Frame118 onClick={handleSubmit} />

      {/* tiny toast near the button; no layout shifts */}
      {msg && (
        <div
          className={`absolute left-[651px] top-[2740px] text-sm px-3 py-2 rounded ${
            msg.type === "ok" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {sending ? "Sending..." : msg.text}
        </div>
      )}
    </div>
  );
}
