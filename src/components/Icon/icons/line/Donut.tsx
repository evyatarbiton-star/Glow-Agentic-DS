import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDonut = ({
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
        d="M6.052 4.684a1 1 0 0 1 1.264-.633l3 1a1 1 0 1 1-.632 1.898l-3-1a1 1 0 0 1-.632-1.265M7.447 10.106l2 1a1 1 0 0 1-.894 1.789l-2-1a1 1 0 0 1 .894-1.79M13.707 19.707a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 1.414 1.414zM13.793 13.793a1 1 0 0 1 1.414 0l.5.5a1 1 0 1 1-1.414 1.414l-.5-.5a1 1 0 0 1 0-1.414M7.895 16.447a1 1 0 0 0-1.79-.894l-1 2a1 1 0 0 0 1.79.894zM21.895 11.553a1 1 0 0 1-.448 1.342l-2 1a1 1 0 0 1-.894-1.79l2-1a1 1 0 0 1 1.342.448M15.949 8.316a1 1 0 1 0-1.897-.632l-.5 1.5a1 1 0 0 0 1.897.632z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDonut;
