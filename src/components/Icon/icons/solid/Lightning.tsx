import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLightning = ({
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
        d="M4.22 13.383 12.85 2.39c.62-.79 1.888-.274 1.78.724L14 9h5.004a1 1 0 0 1 .786 1.617l-8.639 11.004c-.62.79-1.887.275-1.78-.724L10 15H5.006a1 1 0 0 1-.787-1.617"
      />
    </svg>
  );
};
export default SvgLightning;
