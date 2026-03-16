import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgZoomOut = ({
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
        d="M10 3a7 7 0 1 0 4.192 12.606l5.1 5.101a1 1 0 0 0 1.415-1.414l-5.1-5.1A7 7 0 0 0 10 3m-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
      <path fill={color} d="M12 9a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </svg>
  );
};
export default SvgZoomOut;
