import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlignHorizontalCenter = ({
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
        d="M12 3a1 1 0 0 1 1 1v3h-2V4a1 1 0 0 1 1-1m1 6v6h-2V9zm0 11v-3h-2v3a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0 0 6h12a3 3 0 1 0 0-6zM5 8a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m5 5a3 3 0 1 0 0 6h4a3 3 0 1 0 0-6zm-1 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAlignHorizontalCenter;
