import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeart = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="m12 7.212-1.334-1.194A4 4 0 0 0 4 9c0 3 1.34 5.212 3.032 6.85 1.722 1.667 3.748 2.668 4.854 3.13a.28.28 0 0 0 .228 0c1.106-.462 3.132-1.463 4.854-3.13C18.66 14.212 20 12 20 9a4 4 0 0 0-6.666-2.982zm0-2.684A6 6 0 0 0 2 9c0 7.351 6.671 10.806 9.116 11.825.57.238 1.199.238 1.768 0C15.328 19.806 22 16.351 22 9a6 6 0 0 0-10-4.472"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeart;
