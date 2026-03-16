import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAt = ({
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
        d="M4 12a8 8 0 1 1 16 0c0 .244-.004 1.1-.261 1.871-.127.38-.292.668-.485.851-.168.161-.39.278-.754.278-.404 0-.598-.11-.73-.246-.167-.17-.345-.495-.482-1.1C17.006 12.414 17 10.553 17 8a1 1 0 0 0-2 0 5 5 0 1 0 .75 7.307c.155.31.347.597.59.845.57.584 1.314.848 2.16.848.886 0 1.601-.32 2.136-.832.511-.488.814-1.107 1-1.664C22 13.412 22 12.28 22 12.009V12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 4.445-1.04 1 1 0 0 0-.89-1.791A8 8 0 0 1 4 12m11 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAt;
