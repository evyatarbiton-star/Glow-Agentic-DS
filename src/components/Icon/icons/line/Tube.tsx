import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTube = ({
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
        d="M7 16h10v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3zm2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.006 2a3 3 0 0 0-2.959 3.499l1.686 10A3 3 0 0 0 8.691 18h6.62a3 3 0 0 0 2.957-2.5l1.693-10A3 3 0 0 0 17.003 2zM6.02 5.166A1 1 0 0 1 7.006 4h9.997a1 1 0 0 1 .986 1.167L17.85 6H6.16zM6.497 8l1.208 7.166a1 1 0 0 0 .986.834h6.62a1 1 0 0 0 .986-.833L17.51 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTube;
