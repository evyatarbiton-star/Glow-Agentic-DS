import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgArrowShapeDown = ({
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
        d="m11.993 19.76 5.355-5.762h-2.354a1 1 0 0 1-1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1H6.647zm1.099 1.755a1.5 1.5 0 0 1-2.198 0L4.4 14.518c-.89-.96-.21-2.52 1.1-2.52h2.493v-7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v7h2.501c1.31 0 1.991 1.561 1.099 2.52z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeDown;
