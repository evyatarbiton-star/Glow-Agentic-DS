import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTaurus = ({
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
      <path fill={color} d="M12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm11.787-.643a5.5 5.5 0 1 1-5.574 0 16 16 0 0 1-.358-.359q-.097-.1-.187-.19c-.36-.36-.68-.647-1.073-.855C7.215 7.152 6.72 7 6 7a1 1 0 0 1 0-2c1.029 0 1.847.223 2.53.585.67.354 1.162.817 1.552 1.208l.14.14C10.955 7.668 11.285 8 12 8s1.045-.332 1.778-1.067l.14-.14c.39-.39.883-.854 1.552-1.208C16.153 5.223 16.97 5 18 5a1 1 0 1 1 0 2c-.721 0-1.215.152-1.595.353-.393.208-.713.495-1.073.854q-.09.09-.187.191-.167.173-.358.36"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTaurus;
