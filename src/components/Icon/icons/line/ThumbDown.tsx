import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThumbDown = ({
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
        d="M21.002 11a3 3 0 0 1-3 3h-3V3h3a3 3 0 0 1 3 3zm-3 1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1v7z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.153 19.773a2.5 2.5 0 0 1-3.499.832l-.328-.21a2.5 2.5 0 0 1-1.104-2.596L8.782 15H6a3 3 0 0 1-2.966-3.454l.918-6A3 3 0 0 1 6.92 3H17v9.452a3 3 0 0 1-.418 1.529zm-2.42-.852a.5.5 0 0 0 .7-.167l3.429-5.792a1 1 0 0 0 .14-.51V5H6.918a1 1 0 0 0-.989.849l-.918 6A1 1 0 0 0 6.001 13h3.39a1.5 1.5 0 0 1 1.471 1.794l-.679 3.397a.5.5 0 0 0 .22.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThumbDown;
