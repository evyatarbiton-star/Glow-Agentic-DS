import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgClearNight7 = ({
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
        d="M12.85 2.48a1 1 0 0 1 .035.978A8 8 0 0 0 20 15.12h.004a1 1 0 0 1 .888 1.458A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.521 4.475-9.998 9.996-10a1 1 0 0 1 .854.48M10.45 4.15a8 8 0 1 0 7.82 12.82C13.57 16.15 10 12.054 10 7.12c0-1.033.157-2.03.449-2.97"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgClearNight7;
