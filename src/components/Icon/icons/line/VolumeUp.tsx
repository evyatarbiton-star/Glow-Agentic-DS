import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVolumeUp = ({
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
        d="M20 10a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 7.004c0-.96-1.223-1.369-1.8-.6L6.5 10H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5l2.7 3.596c.577.769 1.8.36 1.8-.6zM7.601 5.202C9.331 2.898 13 4.122 13 7.004v9.992c0 2.882-3.668 4.106-5.399 1.801L5.501 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVolumeUp;
