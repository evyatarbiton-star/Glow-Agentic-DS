import type { SpecialtyIconProps } from "../../Icon.types";
const SvgExpences = ({
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
      <g clipPath="url(#Expences_svg__a)">
        <path fill="#FE9767" d="M29.728 21.2H11.904v4.072h17.824z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="m27.272 29.749-2.552-1.856-2.568 2.12-2.928-1.84L16.56 30.3l-2.888-1.84-2.392 2.112-3.104-1.832-2.456 2.12L4.216 1.637 6.624 3.5 9.28 1.373l2.944 1.84 2.824-2.136 2.856 1.848L20.68.789l2.744 1.848L25.768.525zM8.848 7.937l8.776-.456M9.312 16.887l8.776-.456M9.072 12.241l6.992-.36"
        />
      </g>
      <defs>
        <clipPath id="Expences_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgExpences;
