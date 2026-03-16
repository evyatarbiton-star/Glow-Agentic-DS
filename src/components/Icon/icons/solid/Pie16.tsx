import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie16 = ({
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
        d="M13 21c0 .552.45 1.006.998.945a9 9 0 0 0 7.947-7.947c.06-.549-.393-.998-.945-.998h-7a1 1 0 0 0-1 1zM21 11c.552 0 1.006-.449.945-.998a8.996 8.996 0 0 0-7.947-7.946C13.449 1.994 13 2.448 13 3v7a1 1 0 0 0 1 1zM11 4c0-.552-.45-1.006-.998-.945a9 9 0 0 0 0 17.89c.549.06.998-.393.998-.945z"
      />
    </svg>
  );
};
export default SvgPie16;
