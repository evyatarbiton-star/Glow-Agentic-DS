import type { SpecialtyIconProps } from "../../Icon.types";
const SvgMale = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#Male_svg__a)">
        <path
          fill="url(#Male_svg__b)"
          d="m23.245 20.917.08-4.251c1.678.835 2.8-4.218 2.974-5.91.315-3.06-.187-6.517-2.593-7.553-2.68-1.156-4.833.114-7.126-.855-3.228-1.364-5.541 1.61-2.62 4.024-.662 1.811-.782 5.735-.481 7.66.16 1.043.461 2.112 1.09 2.975.52.715 1.216 1.25 1.938 1.758l.1 2.8c3.87 2.848 6.638-.641 6.638-.641z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24.033 21.45s6.277 2.018 7.153 6.878c.534 2.967 0 9.431 0 9.431M15.751 21.691s-7.32 1.986-7.827 7.908c-.214 2.473.441 8.155.441 8.155"
        />
      </g>
      <defs>
        <radialGradient
          id="Male_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(-180 6.445 7.357)scale(14.024)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDB57" />
          <stop offset={0.26} stopColor="#FBDA59" />
          <stop offset={0.46} stopColor="#F2DA62" />
          <stop offset={0.63} stopColor="#E1D870" />
          <stop offset={0.8} stopColor="#CAD684" />
          <stop offset={0.96} stopColor="#ACD49D" />
          <stop offset={1} stopColor="#A4D4A5" />
        </radialGradient>
        <clipPath id="Male_svg__a">
          <path fill="#fff" d="M7.349 2h24.605v36.29H7.349z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgMale;
