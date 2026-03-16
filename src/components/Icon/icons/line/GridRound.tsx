import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGridRound = ({
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
        d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
};
export default SvgGridRound;
