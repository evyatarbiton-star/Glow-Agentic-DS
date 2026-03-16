import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgItalic = ({
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
        d="M14.217 2.024a1 1 0 0 1 .76 1.193l-4 18a1 1 0 0 1-1.953-.434l4-18a1 1 0 0 1 1.193-.76"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 2a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zM5 20a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default SvgItalic;
