import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSquareStackVrAl = ({
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
        d="M10.8 20c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 17.72 6 16.88 6 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 4 9.12 4 10.8 4h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20zM3 18a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1"
      />
    </svg>
  );
};
export default SvgSquareStackVrAl;
