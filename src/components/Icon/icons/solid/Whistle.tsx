import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWhistle = ({
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
        d="M10 20a8 8 0 0 0 7.993-8.332l2.336-.39A2 2 0 0 0 22 9.307V6a2 2 0 0 0-2-2h-4l-.646.646a1.207 1.207 0 0 1-1.708 0L13 4h-3a8 8 0 1 0 0 16m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWhistle;
