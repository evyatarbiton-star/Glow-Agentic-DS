import type { SpecialtyIconProps } from "../../Icon.types";
const SvgOptamologyst = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
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
      <g clipPath="url(#Optamologyst_svg__a)">
        <g clipPath="url(#Optamologyst_svg__b)">
          <path
            fill="#FE9767"
            d="M7.028 24c1.42 0 2.572-3.582 2.572-8S8.449 8 7.028 8C5.608 8 2.4 11.582 2.4 16s3.208 8 4.628 8"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M27.125 23.638A12.212 12.212 0 0 0 8.799 7.531c-2.18 2.265-2.307 5.148-2.317 8.291s.097 6.306 2.262 8.585a12.21 12.21 0 0 0 16.857.815"
          />
        </g>
      </g>
      <defs>
        <clipPath id="Optamologyst_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="Optamologyst_svg__b">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgOptamologyst;
