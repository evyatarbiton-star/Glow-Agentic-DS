import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFork = ({
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
        d="M7 8a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h3v3a1 1 0 1 0 2 0v-3h3a3 3 0 0 0 3-3V8a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
      />
      <path
        fill={color}
        d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6M18 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
};
export default SvgFork;
