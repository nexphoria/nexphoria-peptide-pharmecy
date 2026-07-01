"use client";
export function MarqueeTicker() {
  const items = [
    "BOARD-CERTIFIED PHYSICIANS",
    "503A COMPOUNDED IN THE US",
    "FREE FOUNDATION BLOODWORK PANEL",
    "PHYSICIAN RX IN 24–48H",
    "COLD-CHAIN SHIPPED NATIONWIDE",
    "HIPAA COMPLIANT",
    "MONEY-BACK GUARANTEE",
    "50 STATES COVERED",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden bg-[#0F0F0E] border-y border-[#2A2A28] py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9A9080] uppercase">
              {item}
            </span>
            <span className="text-[#B8A44C] text-[8px]">◆</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}

