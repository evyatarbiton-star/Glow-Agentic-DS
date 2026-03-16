import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgNailPolish = ({
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
        d="M4.848 18.776C2.63 15.454 5.011 11 9.006 11h5.987c3.994 0 6.376 4.453 4.16 7.775l-1.262 1.89A3 3 0 0 1 15.396 22H8.605a3 3 0 0 1-2.496-1.334zM9.718 3.668A2 2 0 0 1 11.691 2h.618a2 2 0 0 1 1.972 1.668l.702 4.166A1 1 0 0 1 13.997 9h-3.995a1 1 0 0 1-.986-1.166z"
      />
    </svg>
  );
};
export default SvgNailPolish;
