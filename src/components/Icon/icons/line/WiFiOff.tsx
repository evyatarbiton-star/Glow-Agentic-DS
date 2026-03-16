import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWiFiOff = ({
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
        d="M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M11.076 6.035Q11.533 6 12 6c3.225 0 6.15 1.27 8.308 3.34a1 1 0 0 0 1.384-1.442A13.96 13.96 0 0 0 10.924 4.04a1 1 0 0 0 .152 1.994M5.564 5.564 7.06 7.06a12 12 0 0 0-3.368 2.28 1 1 0 1 1-1.384-1.442 14 14 0 0 1 3.256-2.334M15.73 15.73 12 12a5.99 5.99 0 0 0-4.54 2.078 1 1 0 0 0 1.512 1.308A3.99 3.99 0 0 1 12 14c1.21 0 2.293.535 3.028 1.386.185.214.44.33.702.344M8.595 8.595a10 10 0 0 0-3.7 2.369 1 1 0 0 0 1.42 1.407 8 8 0 0 1 3.888-2.168zM13.025 9.002a1 1 0 0 1 1.196-.754q.57.129 1.112.321a10 10 0 0 1 3.773 2.395 1 1 0 0 1-1.421 1.407 8 8 0 0 0-3.906-2.173 1 1 0 0 1-.754-1.196"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWiFiOff;
