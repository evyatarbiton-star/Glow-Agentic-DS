import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignAirport = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1-15a1 1 0 1 0-2 0v2.382l-3.447 1.724a1 1 0 1 0 .894 1.789L11 11.618v2.764l-1.447.724a1 1 0 1 0 .894 1.789L12 16.118l1.553.777a1 1 0 1 0 .894-1.79L13 14.383v-2.764l2.553 1.277a1 1 0 1 0 .894-1.79L13 9.383z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoadSignAirport;
