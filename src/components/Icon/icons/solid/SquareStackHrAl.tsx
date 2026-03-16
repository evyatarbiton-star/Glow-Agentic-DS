import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareStackHrAl = ({
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
        d="M4 10.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 6 7.12 6 8.8 6h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 8.28 20 9.12 20 10.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2zM6 3a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default SvgSquareStackHrAl;
