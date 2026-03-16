import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThermometer = ({
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
        d="M7 4a2 2 0 1 1 4 0v10.535a4 4 0 1 1-4 0zm2 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM14 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M14 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      />
    </svg>
  );
};
export default SvgThermometer;
