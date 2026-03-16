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
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M12 6a1 1 0 0 1 1 1v2.382l3.447 1.724a1 1 0 1 1-.894 1.789L13 11.618v2.764l1.447.724a1 1 0 1 1-.894 1.789L12 16.118l-1.553.777a1 1 0 1 1-.894-1.79L11 14.383v-2.764l-2.553 1.277a1 1 0 1 1-.894-1.79L11 9.383V7a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgRoadSignAirport;
