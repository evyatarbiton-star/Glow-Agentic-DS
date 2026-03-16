import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTrafficCone = ({
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
        d="M12 3a2.36 2.36 0 0 0-2.253 1.656L5.265 19H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1.265L14.253 4.656A2.36 2.36 0 0 0 12 3m4.64 16-.938-3H8.298l-.938 3zM11.656 5.253a.36.36 0 0 1 .688 0L13.514 9h-3.029zM9.86 11l-.937 3h6.154l-.937-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTrafficCone;
