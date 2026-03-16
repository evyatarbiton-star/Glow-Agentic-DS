import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCup8 = ({
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
        d="M5 3a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-1h1a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-1a2 2 0 0 0-2-2h-4.5a.5.5 0 0 0-.5.5V7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1V3.5a.5.5 0 0 0-.5-.5zm12 4v7h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCup8;
