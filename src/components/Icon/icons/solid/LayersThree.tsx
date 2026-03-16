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
        d="M12.447 2.106a1 1 0 0 0-.894 0l-8 4a1 1 0 0 0 0 1.788l8 4a1 1 0 0 0 .894 0l8-4a1 1 0 0 0 0-1.788z"
      />
    </svg>
  );
};
export default SvgLayersThree;
