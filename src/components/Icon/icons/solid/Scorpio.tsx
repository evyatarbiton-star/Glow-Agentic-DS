import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgScorpio = ({
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
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m1.67.369a1 1 0 0 1 1.341-.447q.408.204.722.517A3 3 0 0 1 9 5c.768 0 1.47.289 2 .764A3 3 0 0 1 16 8v7.167c0 .386.262.71.618.805a1 1 0 0 1 1.59-1.18l1.498 1.5.008.007a1 1 0 0 1 .286.698v.006c0 .272-.11.518-.286.698l-.008.007-1.499 1.5a1 1 0 0 1-1.57-1.215A2.833 2.833 0 0 1 14 15.167V8a1 1 0 1 0-2 0v8a1 1 0 1 1-2 0V8a1 1 0 0 0-2-.021V16a1 1 0 1 1-2 0V7.618a.81.81 0 0 0-.447-.723 1 1 0 0 1-.447-1.342"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScorpio;
