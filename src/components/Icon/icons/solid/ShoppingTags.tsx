import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingTags = ({
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
        d="M21 6a1 1 0 0 1 1 1v4.757a4 4 0 0 1-1.172 2.829l-5.12 5.121a1 1 0 0 1-1.415-1.414l5.121-5.121A2 2 0 0 0 20 11.757V7a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.828 4a3 3 0 0 0-2.121.879L5.353 9.232a.5.5 0 0 0 0 .707l6.707 6.707a.5.5 0 0 0 .707 0l4.354-4.353A3 3 0 0 0 18 10.172V6a2 2 0 0 0-2-2zM14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m2.59 11.996.642-.643a.5.5 0 0 1 .707 0l6.707 6.708a.5.5 0 0 1 0 .707l-.642.642a2 2 0 0 1-2.829 0L2.59 14.824a2 2 0 0 1 0-2.828"
      />
    </svg>
  );
};
export default SvgShoppingTags;
