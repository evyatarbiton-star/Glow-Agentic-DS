import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSliceTool = ({
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
        d="m8.646 13.354-5.233 5.24c-.887.889-.258 2.406.998 2.406H9a2 2 0 0 0 2-2v-3.793a.5.5 0 0 0-.146-.353l-1.5-1.5a.5.5 0 0 0-.708 0M18.59 3.41l-7.736 7.736a.5.5 0 0 0 0 .707l1.292 1.293a.5.5 0 0 0 .707 0L20.59 5.41a1.414 1.414 0 1 0-2-2"
      />
    </svg>
  );
};
export default SvgSliceTool;
