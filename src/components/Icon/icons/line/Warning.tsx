import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWarning = ({
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
        d="M18.782 16.107 13.79 6.104c-.737-1.476-2.843-1.476-3.58 0L5.219 16.107A2 2 0 0 0 7.008 19h9.985a2 2 0 0 0 1.79-2.893M15.58 5.211c-1.473-2.952-5.685-2.952-7.158 0L3.428 15.214C2.101 17.874 4.035 21 7.008 21h9.985c2.972 0 4.906-3.127 3.579-5.786z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M13 8a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </svg>
  );
};
export default SvgWarning;
