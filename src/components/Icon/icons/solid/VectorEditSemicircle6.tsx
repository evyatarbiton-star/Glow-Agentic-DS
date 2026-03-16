import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSemicircle6 = ({
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
        d="M16.03 6.499C15.998 6.225 15.777 6 15.5 6h-7c-.276 0-.497.225-.53.499a4 4 0 0 1-3.471 3.47c-.274.034-.499.255-.499.531V12a8 8 0 1 0 16 0v-1.5c0-.276-.225-.497-.499-.53a4 4 0 0 1-3.47-3.471M4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSemicircle6;
