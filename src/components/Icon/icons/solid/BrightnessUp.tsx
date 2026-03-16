import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrightnessUp = ({
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
        d="M12 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M12 18a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M21 11a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1M17.657 4.929a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM7.757 16.243a1 1 0 0 0-1.414 0L4.93 17.657a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414M19.071 17.657a1 1 0 0 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 1.415-1.414zM7.757 7.757a1 1 0 0 0 0-1.414L6.343 4.93a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414 0M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default SvgBrightnessUp;
