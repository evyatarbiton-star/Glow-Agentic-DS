import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWiFi = ({
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
        d="M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 4a13.96 13.96 0 0 0-9.692 3.898 1 1 0 0 0-.069 1.37l5.216 6.113a1 1 0 0 0 1.517.005A3.99 3.99 0 0 1 12 14c1.21 0 2.293.536 3.028 1.386a1 1 0 0 0 1.517-.005l5.216-6.113a1 1 0 0 0-.069-1.37A13.96 13.96 0 0 0 12 4"
      />
    </svg>
  );
};
export default SvgWiFi;
