import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgOption = ({
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
        d="M14 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M3 4a1 1 0 0 1 1-1h3.614a3 3 0 0 1 2.809 1.947L15.45 18.35a1 1 0 0 0 .936.649H20a1 1 0 1 1 0 2h-3.614a3 3 0 0 1-2.809-1.947L8.55 5.65A1 1 0 0 0 7.614 5H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgOption;
