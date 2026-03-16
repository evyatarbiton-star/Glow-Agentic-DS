import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPlusSmall = ({
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
        d="M14 9a2 2 0 1 0-4 0v1H9a2 2 0 1 0 0 4h1v1a2 2 0 1 0 4 0v-1h1a2 2 0 1 0 0-4h-1z"
      />
    </svg>
  );
};
export default SvgPlusSmall;
