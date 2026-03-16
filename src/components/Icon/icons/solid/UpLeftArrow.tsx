import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUpLeftArrow = ({
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
        d="M20.707 20.707a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 1.414l10 10a1 1 0 0 0 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 .707 1.707l-6 6A1 1 0 0 1 3 10z"
      />
    </svg>
  );
};
export default SvgUpLeftArrow;
