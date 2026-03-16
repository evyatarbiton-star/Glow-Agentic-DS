import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThermometer1 = ({
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
        d="M7.38 17.793 6.207 16.62l-.963.963a.828.828 0 0 0 1.171 1.172zm.203-2.625a3 3 0 0 0 .425-.952l.731-2.925a1 1 0 0 1 .263-.464l4.963-4.963a2.95 2.95 0 0 1 4.171 4.171l-4.962 4.963a1 1 0 0 1-.465.263l-2.925.732a3 3 0 0 0-.952.424zm5.611 2.034-2.925.73a1 1 0 0 0-.465.264L7.83 20.17a2.829 2.829 0 0 1-4-4l1.974-1.974a1 1 0 0 0 .263-.465l.732-2.925a3 3 0 0 1 .789-1.394L12.55 4.45a4.95 4.95 0 0 1 7 7l-4.962 4.962a3 3 0 0 1-1.394.79"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.707 7.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThermometer1;
