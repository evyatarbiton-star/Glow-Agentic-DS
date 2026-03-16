import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLollipop = ({
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
        d="M8.707 15.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M15.5 14a5.5 5.5 0 1 0-5.376-4.331c.061.282-.1.575-.38.645l-1.03.258a1 1 0 0 0-.465 1.677l3.502 3.502a1 1 0 0 0 1.677-.464l.258-1.032c.07-.28.363-.44.645-.38A5.5 5.5 0 0 0 15.5 14"
      />
    </svg>
  );
};
export default SvgLollipop;
