import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRecordingTape = ({
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
        d="M5.5 15a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6.5 7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M17.5 7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
      />
    </svg>
  );
};
export default SvgRecordingTape;
