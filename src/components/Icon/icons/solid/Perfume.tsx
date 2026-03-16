import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPerfume = ({
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
        d="M18.764 21a.92.92 0 0 0 .711-.317 6.5 6.5 0 1 0-9.95 0 .92.92 0 0 0 .71.317zM6 9C4.454 9 3 7.657 3 6s1.454-3 3-3c1.84 0 3.302 1.127 4.16 2h1.89a2.5 2.5 0 0 1 4.9 0H20a1 1 0 1 1 0 2h-3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1h-1.84C9.301 7.873 7.84 9 6 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPerfume;
