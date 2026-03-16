import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditRectangle7 = ({
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
        d="M16.03 6.499C15.998 6.225 15.777 6 15.5 6h-7c-.276 0-.497.225-.53.499a4 4 0 0 1-3.471 3.47c-.274.034-.499.255-.499.531v3c0 .276.225.497.499.53a4 4 0 0 1 3.47 3.471c.034.274.255.499.531.499h7c.276 0 .497-.225.53-.499a4 4 0 0 1 3.471-3.47c.274-.034.499-.255.499-.531v-3c0-.276-.225-.497-.499-.53a4 4 0 0 1-3.47-3.471M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0m18-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditRectangle7;
