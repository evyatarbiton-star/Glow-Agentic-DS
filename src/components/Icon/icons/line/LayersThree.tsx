import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLayersThree = ({
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
        d="M3.106 16.553a1 1 0 0 1 1.341-.448L12 19.883l7.553-3.777a1 1 0 0 1 .894 1.79l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1-.447-1.342"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.106 11.553a1 1 0 0 1 1.341-.448L12 14.883l7.553-3.777a1 1 0 0 1 .894 1.79l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1-.447-1.342"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.553 2.106a1 1 0 0 1 .894 0l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788zM6.236 7 12 9.882 17.764 7 12 4.118z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLayersThree;
