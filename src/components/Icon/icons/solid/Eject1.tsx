import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEject1 = ({
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
        d="M4.5 16A1.5 1.5 0 0 0 3 17.5v2A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5zM12.819 3.365a1.1 1.1 0 0 0-1.638 0l-7.896 8.8c-.635.708-.132 1.835.82 1.835h15.79c.953 0 1.455-1.127.82-1.835z"
      />
    </svg>
  );
};
export default SvgEject1;
