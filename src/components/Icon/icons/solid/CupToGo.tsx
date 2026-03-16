import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCupToGo = ({
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
        d="M5.496 10a.5.5 0 0 0-.498.544l.843 9.63A2 2 0 0 0 7.833 22h8.333a2 2 0 0 0 1.993-1.827l.834-9.63a.5.5 0 0 0-.498-.543zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M8.442 2a2 2 0 0 0-1.898 1.368L6 5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1l-.544-1.632A2 2 0 0 0 15.559 2z"
      />
    </svg>
  );
};
export default SvgCupToGo;
