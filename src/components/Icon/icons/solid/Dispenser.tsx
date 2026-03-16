import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDispenser = ({
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
        d="M8 10a4 4 0 0 0-3.97 3.501c-.033.274.194.499.47.499h11c.276 0 .503-.225.47-.499A4 4 0 0 0 12 10zm8 6.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9 2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6h3.172a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 1 0 1.414-1.414l-1.414-1.414A3 3 0 0 0 16.172 4H13a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDispenser;
