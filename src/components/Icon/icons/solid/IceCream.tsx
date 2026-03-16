import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgIceCream = ({
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
        d="M7.507 15.351A1 1 0 0 1 8.443 14h7.114a1 1 0 0 1 .937 1.351l-1.791 4.776a2.886 2.886 0 0 1-5.404 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.975 6.5c.028.276.249.5.525.5a2.5 2.5 0 0 1 0 5h-11a2.5 2.5 0 0 1 0-5 .54.54 0 0 0 .525-.5 5 5 0 0 1 9.95 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgIceCream;
