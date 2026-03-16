import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArchiveBox = ({
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
        d="M4 10.5A1.5 1.5 0 0 1 5.5 9h13a1.5 1.5 0 0 1 1.5 1.5V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm6 .5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7h15A1.5 1.5 0 0 0 21 5.5v-1A1.5 1.5 0 0 0 19.5 3z"
      />
    </svg>
  );
};
export default SvgArchiveBox;
