import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRoadSignTurnRightAhead = ({
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
        d="M14.707 7.293a1 1 0 1 0-1.414 1.414l.293.293H11a3 3 0 0 0-3 3v4a1 1 0 1 0 2 0v-4a1 1 0 0 1 1-1h2.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2 .01-.01a.997.997 0 0 0-.01-1.404z"
      />
    </svg>
  );
};
export default SvgRoadSignTurnRightAhead;
