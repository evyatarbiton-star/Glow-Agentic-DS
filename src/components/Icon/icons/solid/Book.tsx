import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBook = ({
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
        d="M4 5a3 3 0 0 1 3-3h4.9a.1.1 0 0 1 .1.1v5.4a.5.5 0 0 0 .8.4L14 7l1.2.9a.5.5 0 0 0 .8-.4V2.1a.1.1 0 0 1 .1-.1H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1v2a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3zm13 15v-2H7a1 1 0 1 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBook;
