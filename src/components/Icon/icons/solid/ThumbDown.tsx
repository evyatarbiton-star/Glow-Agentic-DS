import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThumbDown = ({
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
        d="M20.995 12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM6.592 3h7.403a1 1 0 0 1 1 1v8.543a2 2 0 0 1-.198.869l-3.312 6.866a1.276 1.276 0 0 1-2.409-.764l.822-4.932A.5.5 0 0 0 9.405 14H5.001a2 2 0 0 1-1.95-2.443l1.59-7A2 2 0 0 1 6.591 3"
      />
    </svg>
  );
};
export default SvgThumbDown;
