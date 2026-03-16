import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMoreVrAl = ({
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
        d="M12 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
    </svg>
  );
};
export default SvgMoreVrAl;
