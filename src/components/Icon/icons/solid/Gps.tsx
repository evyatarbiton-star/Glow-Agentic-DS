import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGps = ({
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
        d="M12 2a1 1 0 0 0-1 1v1.062A8.004 8.004 0 0 0 4.062 11H3a1 1 0 1 0 0 2h1.062A8.004 8.004 0 0 0 11 19.938V21a1 1 0 1 0 2 0v-1.062A8.004 8.004 0 0 0 19.938 13H21a1 1 0 1 0 0-2h-1.062A8.004 8.004 0 0 0 13 4.062V3a1 1 0 0 0-1-1m0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGps;
