import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading14 = ({
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
        d="M15.5 4a1 1 0 0 0-1 .954l-.32 7a1 1 0 0 0 1.972.279A2 2 0 0 1 20 13v3a2 2 0 1 1-4 0 1 1 0 1 0-2 0 4 4 0 0 0 8 0v-3a4 4 0 0 0-5.7-3.622L16.456 6H20.5a1 1 0 1 0 0-2zM3 4a1 1 0 0 1 1 1v6h6V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H4v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgHeading14;
