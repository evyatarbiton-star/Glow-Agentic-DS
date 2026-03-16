import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLink = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10.066 6.522a5.242 5.242 0 0 1 7.402 7.425l-.26.26a1 1 0 0 1-1.415-1.414l.26-.26a3.242 3.242 0 0 0-4.578-4.592l-.27.268a1 1 0 1 1-1.41-1.418zM8.205 9.791a1 1 0 0 1 .004 1.414l-.269.27a3.242 3.242 0 0 0 4.593 4.578l.26-.26a1 1 0 0 1 1.414 1.414l-.26.26a5.242 5.242 0 0 1-7.425-7.401l.269-.27a1 1 0 0 1 1.414-.005m5.502 1.916a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLink;
