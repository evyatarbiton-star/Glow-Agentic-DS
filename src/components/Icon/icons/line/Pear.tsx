import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPear = ({
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
        d="M16.472 4a3 3 0 0 0-2.683 1.658l-.894 1.79a1 1 0 1 1-1.79-.895L12 4.763A5 5 0 0 1 16.472 2H19a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4 4.5A2.5 2.5 0 0 1 6.5 2h3A3.5 3.5 0 0 1 13 5.5 2.5 2.5 0 0 1 10.5 8h-3A3.5 3.5 0 0 1 4 4.5M6.5 4a.5.5 0 0 0-.5.5A1.5 1.5 0 0 0 7.5 6h3a.5.5 0 0 0 .5-.5A1.5 1.5 0 0 0 9.5 4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 11a5 5 0 0 1 10 0v.498c0 .678.236 1.332.542 2.177q.053.149.11.305a6 6 0 1 1-11.302 0q.055-.157.108-.305c.306-.845.542-1.499.542-2.177zm5-3a3 3 0 0 0-3 3v.498c0 1.056-.368 2.06-.66 2.858l-.108.297a4 4 0 1 0 7.536 0l-.108-.297c-.292-.798-.66-1.802-.66-2.858V11a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPear;
