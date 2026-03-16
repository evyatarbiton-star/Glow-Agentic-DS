import type { SpecialtyIconProps } from "../../Icon.types";
const SvgInsuranceCard = ({
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
      <g clipPath="url(#InsuranceCard_svg__a)">
        <path
          fill="#FE9767"
          d="M11.22 10.505 1.934 12.12l1.82 10.478 9.287-1.614z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M25.917 5.316 5.402 8.88a2.44 2.44 0 0 0-1.984 2.82l1.94 11.168a2.44 2.44 0 0 0 2.82 1.985l20.515-3.566a2.44 2.44 0 0 0 1.985-2.82L28.737 7.301a2.44 2.44 0 0 0-2.82-1.985M26.94 16.895l-6.37 1.109M26.457 13.91l-8.809 1.53"
        />
      </g>
      <defs>
        <clipPath id="InsuranceCard_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgInsuranceCard;
