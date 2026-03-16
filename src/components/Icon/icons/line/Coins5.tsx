import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCoins5 = ({
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
        d="M14.5 5a4.5 4.5 0 0 1 .41 8.982l.18 1.992A6.5 6.5 0 1 0 8.026 8.91l1.992.18A4.5 4.5 0 0 1 14.5 5"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m6.5 4.5a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCoins5;
