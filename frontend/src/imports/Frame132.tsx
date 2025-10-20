import imgRectangle23 from "figma:asset/75737e0ca7f59fa41f701bdbd75aba8e75bb64f1.png";

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-center justify-center left-[16px] pl-0 pr-[10px] py-[10px] top-[66px] w-[54px]">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff730e] text-[20px] text-nowrap whitespace-pre">3/4</p>
    </div>
  );
}

export default function Frame132() {
  return (
    <div className="bg-[#d9d9d9] relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.003348582424223423)+(var(--transform-inner-height)*0.9999942779541016)))] items-center justify-center left-[10px] top-[32.13px] w-[calc(1px*((var(--transform-inner-height)*0.003348582424223423)+(var(--transform-inner-width)*0.9999942779541016)))]" style={{ "--transform-inner-width": "36", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.192deg]">
          <div className="h-0 relative w-[36.014px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 1">
                <line id="Line 8" stroke="var(--stroke-0, black)" x2="36.0139" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Share_Tech:Regular',_sans-serif] leading-[normal] left-[55px] not-italic text-[#030303] text-[12px] text-nowrap top-[24px] whitespace-pre">What we offer</p>
      <Frame18 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[normal] left-[16px] not-italic text-[#232a91] text-[28px] text-nowrap top-[103px] whitespace-pre">Apple Creative Studio</p>
      <p className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] left-[16px] text-[#9f9f9f] text-[12px] top-[173px] w-[248px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Innovation Centre houses a state-of-the-art Apple Creative Studio. A course on iOS Software development is offered here to both MIT students and non-MIT students.
      </p>
      <div className="absolute h-[138px] left-[16px] top-[297px] w-[317px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[164.86%] left-0 max-w-none top-[-65.24%] w-full" src={imgRectangle23} />
        </div>
      </div>
    </div>
  );
}