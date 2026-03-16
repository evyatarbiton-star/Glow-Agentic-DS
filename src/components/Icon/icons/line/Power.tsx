import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPower = ({
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
        d="M17.657 4.929a1 1 0 0 1 1.414 0c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142a1 1 0 0 1 1.414 1.414 8 8 0 1 0 11.314 0 1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPower;
