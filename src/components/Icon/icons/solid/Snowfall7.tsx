import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSnowfall7 = ({
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
        d="M4 9.5A3.5 3.5 0 0 0 7.5 13h8a4.5 4.5 0 1 0-.48-8.975 5.001 5.001 0 0 0-8.973 2.29A3.5 3.5 0 0 0 4 9.5"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
};
export default SvgSnowfall7;
