import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLine6 = ({
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
        d="M3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 5a5.38 5.38 0 0 0-5.38 5.38c0 2.041 1.16 3.827 2.854 4.74A1 1 0 0 1 9 17H4a1 1 0 1 1 0-2h2.26a7.32 7.32 0 0 1-1.64-4.62 7.38 7.38 0 1 1 14.76 0A7.32 7.32 0 0 1 17.74 15H20a1 1 0 1 1 0 2h-5a1 1 0 0 1-.474-1.88c1.694-.913 2.854-2.699 2.854-4.74A5.38 5.38 0 0 0 12 5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLine6;
