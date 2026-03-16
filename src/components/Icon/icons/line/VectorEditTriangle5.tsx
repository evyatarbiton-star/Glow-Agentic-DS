import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditTriangle5 = ({
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
        d="M8.207 6.793a1 1 0 0 0-1.65.376A1 1 0 0 0 5 8v8a1 1 0 1 0 1.999 0V8.414L15.586 17H8a1 1 0 1 0 0 2h8a1 1 0 0 0 .831-1.556 1 1 0 0 0 .376-1.65z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m12 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-3-1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditTriangle5;
