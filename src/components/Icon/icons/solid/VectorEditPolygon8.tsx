import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditPolygon8 = ({
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
        d="M13.561 18.74c.272-.045.453-.303.442-.579l-.003-.16a4 4 0 0 1 3.501-3.97c.274-.034.499-.255.499-.53v-3c0-.277-.225-.497-.499-.532a4 4 0 0 1-3.498-4.13c.011-.276-.17-.533-.442-.579l-3.121-.52c-.273-.045-.527.14-.606.406a4 4 0 0 1-3.335 2.823C6.225 8.004 6 8.224 6 8.5v7c0 .276.225.497.499.531a4 4 0 0 1 3.335 2.824c.079.265.333.45.606.405zM16 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4M4 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditPolygon8;
