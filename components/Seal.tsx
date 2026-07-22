export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Old Dominion Dispatch seal, established 1607"
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="#7C2836"
        stroke="#B08D57"
        strokeWidth="2.5"
      />
      <circle
        cx="50"
        cy="50"
        r="39"
        fill="none"
        stroke="#B08D57"
        strokeWidth="1"
      />
      <path
        id="sealArcTop"
        d="M 14,50 A 36,36 0 0 1 86,50"
        fill="none"
      />
      <path
        id="sealArcBottom"
        d="M 18,63 A 32,32 0 0 0 82,63"
        fill="none"
      />
      <text fill="#F6F0E4" fontSize="8.5" letterSpacing="2" fontFamily="Georgia, serif">
        <textPath href="#sealArcTop" startOffset="50%" textAnchor="middle">
          OLD DOMINION
        </textPath>
      </text>
      <text
        x="50"
        y="47"
        fill="#F6F0E4"
        fontSize="8"
        fontFamily="Georgia, serif"
        letterSpacing="4"
        textAnchor="middle"
      >
        1607
      </text>
      <line x1="34" y1="55" x2="66" y2="55" stroke="#B08D57" strokeWidth="1" />
      <text fill="#D3B683" fontSize="6.5" fontFamily="Georgia, serif" letterSpacing="1.5">
        <textPath href="#sealArcBottom" startOffset="50%" textAnchor="middle">
          DISPATCH
        </textPath>
      </text>
    </svg>
  );
}
