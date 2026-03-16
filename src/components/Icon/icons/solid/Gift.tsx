import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgGift = ({
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
        d="M11 15.5a.5.5 0 0 0-.5-.5H5a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h3.5a.5.5 0 0 0 .5-.5zm2 5a.5.5 0 0 0 .5.5H17a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1h-5.5a.5.5 0 0 0-.5.5zM5 9a2 2 0 1 0 0 4h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm8.5 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H19a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 3a2 2 0 1 0 0 4h1.5a.5.5 0 0 0 .5-.5V5a2 2 0 0 0-2-2M15 3a2 2 0 1 1 0 4h-1.5a.5.5 0 0 1-.5-.5V5a2 2 0 0 1 2-2"
      />
    </svg>
  );
};
export default SvgGift;
