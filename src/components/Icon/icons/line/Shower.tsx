import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShower = ({
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
        d="M9 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 2a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v1H9a5 5 0 0 0-5 5 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 5 5 0 0 0-5-5h-2V5a3 3 0 0 0-3-3zm7 6H9a3 3 0 0 0-3 3 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShower;
