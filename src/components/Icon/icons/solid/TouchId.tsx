import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTouchId = ({
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
        d="M11.949 10H12a2 2 0 1 1-2 2.018V12a2 2 0 0 1 1.948-2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.821 3.996c-.617.76-1.261 1.357-1.734 1.672a1 1 0 0 0 1.11 1.664c.881-.587 1.967-1.69 2.833-2.955C15.245 15.125 16 13.547 16 12a4 4 0 0 0-8 0v.02c-.008 1.191-.72 2.258-2.055 3.148a1 1 0 0 0 1.11 1.664c.826-.551 1.56-1.228 2.09-2.03a3.99 3.99 0 0 0 3.034 1.194M6 12a6 6 0 1 1 10.925 3.428 1 1 0 0 0 1.64 1.144A8 8 0 1 0 4 12a1 1 0 1 0 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTouchId;
