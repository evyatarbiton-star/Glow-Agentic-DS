import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmEditInLc = ({
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
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-2.963-6.692.887-2.126a1 1 0 0 1 .216-.322l2.563-2.563a1 1 0 0 1 1.414 0l.586.585a1 1 0 0 1 0 1.415L12.14 14.86a1 1 0 0 1-.322.216l-2.127.886a.5.5 0 0 1-.654-.654"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmEditInLc;
