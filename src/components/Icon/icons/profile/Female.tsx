import type { SpecialtyIconProps } from "../../Icon.types";
const SvgFemale = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <g clipPath="url(#Female_svg__a)">
        <path
          fill="url(#Female_svg__b)"
          d="M20.006 2.113c-4.191-.893-7.399 3.64-7.678 9.26-.279 5.622-2.322 8.07-2.322 8.07l5.893.864-.056 1.57a2.98 2.98 0 0 0 1.206 2.559 4.16 4.16 0 0 0 2.483.802c1.067 0 1.848-.356 2.392-.775.725-.558 1.116-1.45 1.109-2.364l-.014-1.924 4.61-.88s1.813-15.16-7.623-17.182"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M23.932 22.578s3.424 1.179 5.627 4.003c2.197 2.824 2.016 8.417 1.688 11.73M7.934 38.313s-.258-7.406.907-10.516c1.172-3.11 6.123-4.902 6.123-4.902"
        />
      </g>
      <defs>
        <radialGradient
          id="Female_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(16.054 0 0 16.723 13.534 21.946)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.11} stopColor="#FFDB57" />
          <stop offset={0.37} stopColor="#FED757" />
          <stop offset={0.57} stopColor="#FECE5A" />
          <stop offset={0.75} stopColor="#FEBD5D" />
          <stop offset={0.91} stopColor="#FEA663" />
          <stop offset={1} stopColor="#FE9767" />
        </radialGradient>
        <clipPath id="Female_svg__a">
          <path fill="#fff" d="M7.349 2H32v36.87H7.349z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgFemale;
