import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCamera = ({
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
        d="M10.236 5a1 1 0 0 0-.894.553L8.618 7H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.618l-.724-1.447A1 1 0 0 0 13.764 5zm-2.683-.342A3 3 0 0 1 10.236 3h3.528a3 3 0 0 1 2.683 1.658l.171.342H17a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h.382z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCamera;
