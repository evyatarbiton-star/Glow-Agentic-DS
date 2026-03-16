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
        d="M12.823 2.371a1.1 1.1 0 0 0-1.648 0l-6.898 7.8c-.628.71-.124 1.828.824 1.828H8v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8h2.9c.947 0 1.451-1.119.823-1.829z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgArrowShapeUp;
