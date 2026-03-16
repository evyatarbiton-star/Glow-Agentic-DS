import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPin = ({
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
        d="M11 19a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM9.883 2a1 1 0 0 0-.992.876L8.042 9.66a1 1 0 0 1-.286.583l-.585.585A4 4 0 0 0 6 13.657V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.343a4 4 0 0 0-1.172-2.829l-.585-.585a1 1 0 0 1-.286-.583l-.848-6.784A1 1 0 0 0 14.118 2z"
      />
      <path
        fill={color}
        d="M7 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgPin;
