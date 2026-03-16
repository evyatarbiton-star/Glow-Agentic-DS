import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRepeat8 = ({
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
        d="m21.707 15.707-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 15 14h6a1 1 0 0 1 .707 1.707"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 5a1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V8a4 4 0 0 0-4-4h-1a1 1 0 0 0-1 1M6 12a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6.707 5.293a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 3 10h6a1 1 0 0 0 .707-1.707z"
      />
    </svg>
  );
};
export default SvgRepeat8;
