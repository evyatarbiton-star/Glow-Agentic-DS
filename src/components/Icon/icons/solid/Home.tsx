import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHome = ({
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
        d="M12.682 7.165a1.5 1.5 0 0 0-1.364 0l-5.5 2.805A1.5 1.5 0 0 0 5 11.306V18a3 3 0 0 0 3 3h.86c.63 0 1.14-.51 1.14-1.14V17a2 2 0 1 1 4 0v2.86c0 .63.51 1.14 1.14 1.14H16a3 3 0 0 0 3-3v-6.694a1.5 1.5 0 0 0-.819-1.336z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.106 8.447a1 1 0 0 0 1.341.447L12 5.118l7.553 3.776a1 1 0 1 0 .894-1.789l-8-4a1 1 0 0 0-.894 0l-8 4a1 1 0 0 0-.447 1.342"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHome;
