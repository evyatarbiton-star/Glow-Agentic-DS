import type { SpecialtyIconProps } from "../../Icon.types";
const SvgPct = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#Pct_svg__a)">
        <path
          fill="#FE9767"
          d="M9.944 23.965H26.44v-7.128H9.944l-4.408 3.424zM22.032 6.781H5.536v7.128h16.496l4.408-3.424z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M.744 5.837v21h11.072V3.581H.744M31.216 24.59V3.58H20.144v23.256h11.072"
        />
      </g>
      <defs>
        <clipPath id="Pct_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgPct;
