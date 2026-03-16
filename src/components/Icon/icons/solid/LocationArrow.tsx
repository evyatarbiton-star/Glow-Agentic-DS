import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationArrow = ({
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
        d="m9.432 13.852-4.937-1.287c-1.88-.49-2.028-3.101-.216-3.8l14.648-5.658c1.23-.476 2.441.735 1.966 1.965l-5.658 14.649c-.7 1.812-3.31 1.663-3.8-.216l-1.288-4.937a1 1 0 0 0-.715-.716"
      />
    </svg>
  );
};
export default SvgLocationArrow;
