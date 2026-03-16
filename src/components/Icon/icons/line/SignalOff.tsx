import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSignalOff = ({
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
        d="M19 4a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM11.293 11.293A1 1 0 0 0 11 12v8a1 1 0 1 0 2 0v-7zM15 15v5a1 1 0 1 0 2 0v-3zM7 16a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zM3 20a1 1 0 1 1 2 0 1 1 0 0 1-2 0M16 7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSignalOff;
