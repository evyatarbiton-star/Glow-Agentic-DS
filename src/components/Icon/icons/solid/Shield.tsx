import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShield = ({
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
        d="M12.717 2.134a2 2 0 0 0-1.434 0l-7 2.686A2 2 0 0 0 3 6.687v4.221a11 11 0 0 0 5.954 9.775l2.129 1.099a2 2 0 0 0 1.835 0l2.128-1.1A11 11 0 0 0 21 10.909v-4.22a2 2 0 0 0-1.283-1.868z"
      />
    </svg>
  );
};
export default SvgShield;
