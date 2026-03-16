import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingBag = ({
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
        d="M3.024 11.45A4 4 0 0 1 7 7h10.002a4 4 0 0 1 3.974 4.45l-.68 6A4 4 0 0 1 16.321 21H7.679a4 4 0 0 1-3.975-3.55zM7 9a2 2 0 0 0-1.987 2.225l.68 6A2 2 0 0 0 7.679 19h8.642a2 2 0 0 0 1.987-1.775l.68-6A2 2 0 0 0 17 9z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0v3a1 1 0 1 1-2 0V7a2 2 0 1 0-4 0v3a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShoppingBag;
