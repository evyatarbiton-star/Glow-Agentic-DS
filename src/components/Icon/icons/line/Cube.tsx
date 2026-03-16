import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCube = ({
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
        d="M5 7a1 1 0 0 0-2 0v10a1 1 0 0 0 .553.894l8 4a1 1 0 0 0 .894 0l8-4A1 1 0 0 0 21 17V7a1 1 0 1 0-2 0v9.382l-6 3V11a1 1 0 1 0-2 0v8.382l-6-3z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.553 2.106a1 1 0 0 1 .894 0l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788zM6.236 7 12 9.882 17.764 7 12 4.118z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCube;
