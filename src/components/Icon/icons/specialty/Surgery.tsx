import type { SpecialtyIconProps } from "../../Icon.types";
const SvgSurgery = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#Surgery_svg__a)">
        <path
          fill="#FE9767"
          d="M15.936 14.498a5.224 5.224 0 1 0 0-10.448 5.224 5.224 0 0 0 0 10.448M6.824 22.63a5.224 5.224 0 1 0 0-10.449 5.224 5.224 0 0 0 0 10.448M15.936 31.173a5.224 5.224 0 1 0 0-10.448 5.224 5.224 0 0 0 0 10.448M25.128 23.16a5.224 5.224 0 1 0 0-10.448 5.224 5.224 0 0 0 0 10.448"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M15.936 28.578c7.136 0 12.92-5.785 12.92-12.92 0-7.136-5.784-12.92-12.92-12.92-7.135 0-12.92 5.784-12.92 12.92 0 7.135 5.785 12.92 12.92 12.92"
        />
      </g>
      <defs>
        <clipPath id="Surgery_svg__a">
          <path fill="#fff" d="M32 0H0v32h32z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgSurgery;
