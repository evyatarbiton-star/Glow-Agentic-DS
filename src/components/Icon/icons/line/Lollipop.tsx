import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLollipop = ({
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
        d="m7.586 15-4.293 4.293a1 1 0 1 0 1.414 1.414L9 16.414z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 9a6 6 0 0 1-7.19 5.882l-.197.79c-.471 1.886-2.819 2.536-4.193 1.162L7.167 14.58c-1.375-1.374-.724-3.722 1.161-4.193l.79-.197A6 6 0 1 1 21 9m-2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-9.156 3.07-1.031.258a.5.5 0 0 0-.232.838l2.253 2.253a.5.5 0 0 0 .839-.232l.257-1.03a6 6 0 0 1-2.086-2.087"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLollipop;
