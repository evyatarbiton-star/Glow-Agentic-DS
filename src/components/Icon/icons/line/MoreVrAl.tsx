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
        d="M12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      />
    </svg>
  );
};
export default SvgMoreVrAl;
