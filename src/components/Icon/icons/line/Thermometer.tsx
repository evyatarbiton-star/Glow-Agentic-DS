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
        d="m8 13.999-.799.6a3 3 0 1 0 3.598 0l-.799-.6V5a1 1 0 0 0-2 0zM6 5a3 3 0 0 1 6 0v8a5 5 0 1 1-6 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM14 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M14 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      />
    </svg>
  );
};
export default SvgThermometer;
