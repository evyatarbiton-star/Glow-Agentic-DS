import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading15 = ({
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
        d="M18.086 4.594A1 1 0 0 1 19 4h1a1 1 0 0 1 1 1v8a1 1 0 1 1 0 2v4a1 1 0 1 1-2 0v-4h-4a1 1 0 0 1-.914-1.406zM19 13V7.462L16.539 13z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1 1v6h6V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H4v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgHeading15;
