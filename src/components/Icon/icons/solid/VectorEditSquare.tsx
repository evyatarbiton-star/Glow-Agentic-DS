import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditSquare = ({
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
        d="M15.03 5.499C14.998 5.225 14.777 5 14.5 5h-5c-.276 0-.497.225-.53.499a4 4 0 0 1-3.471 3.47C5.225 9.003 5 9.224 5 9.5v5c0 .276.225.497.499.53a4 4 0 0 1 3.47 3.471c.034.274.255.499.531.499h5c.276 0 .497-.225.53-.499a4 4 0 0 1 3.471-3.47c.274-.034.499-.255.499-.531v-5c0-.276-.225-.497-.499-.53a4 4 0 0 1-3.47-3.471M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m16-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditSquare;
