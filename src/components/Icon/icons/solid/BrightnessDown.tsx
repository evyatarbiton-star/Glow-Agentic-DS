import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrightnessDown = ({
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
        d="M12 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2M21 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0M17.657 4.929a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414M6.343 17.657A1 1 0 1 0 4.93 19.07a1 1 0 0 0 1.414-1.414M19.071 17.657a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414M6.343 6.343A1 1 0 1 0 4.93 4.93a1 1 0 0 0 1.414 1.414M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default SvgBrightnessDown;
