import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgForkAndKnife = ({
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
        d="M15 4.174C15 3.526 15.526 3 16.174 3A4.826 4.826 0 0 1 21 7.826V12a1 1 0 0 1-.758.97l-4 1A1 1 0 0 1 15 13zM17 17a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM4 3a1 1 0 0 1 1 1v2c0 1.306.835 2.417 2 2.83V4a1 1 0 0 1 2 0v4.83A3 3 0 0 0 11 6V4a1 1 0 1 1 2 0v2A5 5 0 0 1 3 6V4a1 1 0 0 1 1-1M8 13a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgForkAndKnife;
