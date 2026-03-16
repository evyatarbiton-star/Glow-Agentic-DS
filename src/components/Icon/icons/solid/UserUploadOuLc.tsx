import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserUploadOuLc = ({
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
        d="M15 14c.218 0 .293.277.126.418A5.99 5.99 0 0 0 13 19v2.5a.5.5 0 0 1-.5.5H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5zM12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.293 15.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L20 18.414V22a1 1 0 1 1-2 0v-3.586l-.293.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserUploadOuLc;
