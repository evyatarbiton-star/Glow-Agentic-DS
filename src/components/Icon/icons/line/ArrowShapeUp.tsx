import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowShapeUp = ({
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
        d="m11.993 4.233 5.355 5.76h-2.354a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 0-1-1H6.647zm1.099-1.756a1.5 1.5 0 0 0-2.198 0L4.4 9.473c-.89.96-.21 2.52 1.1 2.52h2.493v7a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7h2.501c1.31 0 1.991-1.562 1.099-2.521z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeUp;
