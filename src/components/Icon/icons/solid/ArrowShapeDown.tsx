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
        d="M12.823 21.627a1.1 1.1 0 0 1-1.648 0l-6.898-7.799C3.65 13.118 4.153 12 5.101 12H8V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8h2.9c.947 0 1.451 1.12.823 1.83z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeDown;
