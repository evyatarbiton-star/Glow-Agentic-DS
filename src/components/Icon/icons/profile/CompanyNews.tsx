import type { SpecialtyIconProps } from "../../Icon.types";
const SvgCompanyNews = ({
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
      <path
        fill="#FE9767"
        d="M24.83 6.89a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.28}
        d="M24.44 14.07H4.42a2.4 2.4 0 0 1-2.4-2.4V6.6a2.4 2.4 0 0 1 2.4-2.4h22.46a2.4 2.4 0 0 1 2.4 2.4v5.07a2.4 2.4 0 0 1-2.4 2.4M4.87 7.05h13.62M4.87 9.82h7.1"
      />
      <path
        fill="#FE9767"
        d="M24.83 21.35a2.68 2.68 0 1 0 0-5.36 2.68 2.68 0 0 0 0 5.36"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.28}
        d="M4.42 18.67a2.4 2.4 0 0 0-2.4 2.4v5.07a2.4 2.4 0 0 0 2.4 2.4h22.46a2.4 2.4 0 0 0 2.4-2.4v-5.07a2.4 2.4 0 0 0-2.4-2.4H6.74M4.87 21.52H16M4.87 24.28h14.71"
      />
    </svg>
  );
};
export default SvgCompanyNews;
