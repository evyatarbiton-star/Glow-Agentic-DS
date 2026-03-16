import type { SpecialtyIconProps } from "../../Icon.types";
const SvgEyeDoctor = ({
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
      <g clipPath="url(#EyeDoctor_svg__a)">
        <g clipPath="url(#EyeDoctor_svg__b)">
          <path
            fill="#FE9767"
            d="M15.96 24.992a8.152 8.152 0 1 0 0-16.304 8.152 8.152 0 0 0 0 16.304"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.28}
            d="M1.36 18.576s4.32-7.76 14.6-7.76 15.384 9.096 15.384 9.096-12.736 15.08-29.992 1.328M.64 9.752l1.976 2.464M30.584 9.752l-1.968 2.464M10.464 5.096l.848 3.048M21.36 4.64l-.848 3.056"
          />
        </g>
      </g>
      <defs>
        <clipPath id="EyeDoctor_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
        <clipPath id="EyeDoctor_svg__b">
          <path fill="#fff" d="M0 4h31.992v23.664H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgEyeDoctor;
