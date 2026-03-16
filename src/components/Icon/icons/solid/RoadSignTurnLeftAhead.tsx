import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignTurnLeftAhead = ({
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9.293 7.293a1 1 0 0 1 1.414 1.414L10.414 9H13a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1h-2.586l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoadSignTurnLeftAhead;
