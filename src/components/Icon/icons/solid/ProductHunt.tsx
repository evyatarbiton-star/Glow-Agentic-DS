import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgProductHunt = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1-10v-2h2a1 1 0 1 1 0 2zm2 2h-2v2a1 1 0 1 1-2 0V9.294C9 8.58 9.58 8 10.294 8H13a3 3 0 1 1 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgProductHunt;
