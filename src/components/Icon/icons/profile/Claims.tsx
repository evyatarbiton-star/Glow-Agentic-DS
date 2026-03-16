import type { SpecialtyIconProps } from "../../Icon.types";
const SvgClaims = ({ size = 32, className, ...props }: SpecialtyIconProps) => {
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
      <g clipPath="url(#Claims_svg__a)">
        <path
          fill="#FE9767"
          d="M21.5 29a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.28}
          d="M27.056 29.224 25.552 1 4 2.112l1.504 28.224 2.344-2.112 2.744 1.848 2.776-2.136 2.856 1.848 2.824-2.136 2.944 1.84 2.656-2.128zM8.848 7.937l8.776-.456M9.072 12.241l6.992-.36"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M20.215 16.902a.727.727 0 1 1 1.452-.07 2.18 2.18 0 0 1 2.285 2.074.727.727 0 1 1-1.453.07.727.727 0 0 0-.761-.691l-.727.035-.913.044a.54.54 0 0 0-.12 1.06l2.67.75a1.995 1.995 0 0 1-.443 3.913l-.186.01a.727.727 0 1 1-1.453.07 2.18 2.18 0 0 1-2.285-2.074.727.727 0 1 1 1.453-.07c.02.4.36.71.762.69l.726-.035.913-.044a.54.54 0 0 0 .12-1.06l-2.67-.749a1.995 1.995 0 0 1 .443-3.914z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="Claims_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SvgClaims;
