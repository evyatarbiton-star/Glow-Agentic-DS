import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCircleAndSquare = ({
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
        d="M9 17.5c0-.276.224-.498.5-.515A8 8 0 0 0 16.985 9.5c.017-.276.239-.5.515-.5H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z"
      />
      <path fill={color} d="M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0" />
    </svg>
  );
};
export default SvgCircleAndSquare;
