import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingBag = ({
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
        d="M3.016 11.303A3 3 0 0 1 6 8h2v2a1 1 0 1 0 2 0V8h4v2a1 1 0 1 0 2 0V8h2a3 3 0 0 1 2.985 3.303l-.71 7A3 3 0 0 1 17.288 21H6.711a3 3 0 0 1-2.985-2.697z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0v1h-2V7a2 2 0 1 0-4 0v1H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShoppingBag;
