import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBookmarkOff = ({
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
        d="M20 18.586 4.656 3.24l-.484 1.597A4 4 0 0 0 4 6v14c0 1.684 1.953 2.614 3.26 1.554l4.11-3.335a1 1 0 0 1 1.26 0l4.11 3.335c1.307 1.06 3.26.13 3.26-1.553z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 3a1 1 0 0 1 1-1h7a4 4 0 0 1 4 4v7a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H9a1 1 0 0 1-1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBookmarkOff;
