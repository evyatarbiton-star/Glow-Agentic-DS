import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHurricane = ({
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
      <path fill={color} d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.832 15.557C16.247 18.197 14.21 20 12 20a1 1 0 1 0 0 2c4.005 0 7-3.732 7-8s-2.995-8-7-8c-1.982 0-3.74.961-4.832 2.443C7.753 5.803 9.789 4 12 4a1 1 0 1 0 0-2c-4.005 0-7 3.732-7 8s2.995 8 7 8c1.982 0 3.74-.961 4.832-2.443m-5.077.436Q11.877 16 12 16a4 4 0 1 0-.245-.007"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHurricane;
