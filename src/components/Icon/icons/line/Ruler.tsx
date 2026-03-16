import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRuler = ({
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
        d="M12.412 4.174a4 4 0 0 1 5.657 0l1.76 1.76a4.01 4.01 0 0 1 0 5.671l-8.223 8.223a4.01 4.01 0 0 1-5.671 0l-1.76-1.76a4 4 0 0 1 0-5.657zm4.242 1.415a2 2 0 0 0-2.828 0L5.59 13.826a2 2 0 0 0 0 2.828l1.76 1.76a2.01 2.01 0 0 0 2.842 0l8.224-8.223a2.01 2.01 0 0 0 0-2.843z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10.586 6 12 4.586l2.707 2.707a1 1 0 0 1-1.414 1.414zM7.586 9 9 7.586l2.707 2.707a1 1 0 0 1-1.414 1.414zM4.586 12 6 10.586l2.707 2.707a1 1 0 1 1-1.414 1.414z"
      />
    </svg>
  );
};
export default SvgRuler;
