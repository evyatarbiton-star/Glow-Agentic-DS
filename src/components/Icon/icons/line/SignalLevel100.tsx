import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSignalLevel100 = ({
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
        d="M19 4a1 1 0 1 1 2 0v16a1 1 0 1 1-2 0zM16 7a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1M12 11a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1M7 16a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zM4 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </svg>
  );
};
export default SvgSignalLevel100;
