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
        d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
};
export default SvgGridRound;
