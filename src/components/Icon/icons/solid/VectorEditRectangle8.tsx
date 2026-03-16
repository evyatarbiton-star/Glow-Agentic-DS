import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditRectangle8 = ({
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
        d="M9.97 4.499c.033-.274.254-.499.53-.499h3c.276 0 .497.225.53.499a4 4 0 0 0 3.471 3.47c.274.034.499.255.499.531v7c0 .276-.225.497-.499.53a4 4 0 0 0-3.47 3.471c-.034.274-.255.499-.531.499h-3c-.276 0-.497-.225-.53-.499a4 4 0 0 0-3.471-3.47C6.225 15.997 6 15.776 6 15.5v-7c0-.276.225-.497.499-.53a4 4 0 0 0 3.47-3.471M6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m14 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditRectangle8;
