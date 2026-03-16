import type { SpecialtyIconProps } from "../../Icon.types";
const SvgInsuranceCards = ({
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
      <g clipPath="url(#InsuranceCards_svg__a)">
        <path
          fill="#FE9767"
          d="M14.965 4.226 8.009 3.6l-.706 7.848 6.956.626z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M29.554 4 12.136 2.433A2.05 2.05 0 0 0 9.913 4.29L9.06 13.77a2.05 2.05 0 0 0 1.857 2.224l17.417 1.566a2.05 2.05 0 0 0 2.224-1.856l.852-9.482A2.05 2.05 0 0 0 29.554 4M27.896 14.599l-5.976-.537M28.104 12.294l-8.264-.744"
        />
        <path fill="#FE9767" d="M7.002 18.123.06 18.9l.877 7.83 6.94-.776z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="m11.688 16.063-7.816.872a2.05 2.05 0 0 0-1.808 2.264l1.056 9.455a2.05 2.05 0 0 0 2.264 1.808l17.384-1.944a2.05 2.05 0 0 0 1.808-2.264l-1.024-9.128M21.752 25.7l-5.968.672M21.488 23.406l-8.248.92"
        />
      </g>
      <defs>
        <clipPath id="InsuranceCards_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgInsuranceCards;
