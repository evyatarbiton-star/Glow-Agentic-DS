import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPie15 = ({
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
        d="M7.343 18.657c-.39.39-.393 1.029.038 1.374a9.001 9.001 0 1 0 6.617-15.975C13.449 3.994 13 4.448 13 5v7.586a1 1 0 0 1-.293.707z"
      />
      <path
        fill={color}
        d="M11 2.95c0-.552-.45-1.006-.998-.944A9 9 0 0 0 3.97 16.569c.344.431.983.428 1.373.038l5.364-5.364a1 1 0 0 0 .293-.707z"
      />
    </svg>
  );
};
export default SvgPie15;
