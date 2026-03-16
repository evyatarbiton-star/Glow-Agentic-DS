import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGps = ({
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
        d="M11 3a1 1 0 1 1 2 0v1.062A8.004 8.004 0 0 1 19.938 11H21a1 1 0 1 1 0 2h-1.062A8.004 8.004 0 0 1 13 19.938V21a1 1 0 1 1-2 0v-1.062A8.004 8.004 0 0 1 4.062 13H3a1 1 0 1 1 0-2h1.062A8.004 8.004 0 0 1 11 4.062zm-5 9a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
        clipRule="evenodd"
      />
      <path fill={color} d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
};
export default SvgGps;
