import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingTag = ({
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
        d="M12.828 3a3 3 0 0 0-2.121.879L6.353 8.232a.5.5 0 0 0 0 .707l8.707 8.708a.5.5 0 0 0 .707 0l4.354-4.354A3 3 0 0 0 21 11.172V5a2 2 0 0 0-2-2zM17 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M13.646 19.768a.5.5 0 0 0 0-.707L4.94 10.354a.5.5 0 0 0-.707 0l-.642.642a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.828 0z"
      />
    </svg>
  );
};
export default SvgShoppingTag;
