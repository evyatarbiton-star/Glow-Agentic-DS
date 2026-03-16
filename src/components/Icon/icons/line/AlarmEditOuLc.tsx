import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmEditOuLc = ({
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
        d="m15.924 19.182-.886 2.126a.5.5 0 0 0 .654.654l2.126-.886a1 1 0 0 0 .322-.216l3.563-3.563a1 1 0 0 0 0-1.415l-.585-.585a1 1 0 0 0-1.415 0L16.14 18.86a1 1 0 0 0-.216.322"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a7 7 0 0 0 0 14 1 1 0 1 1 0 2 9 9 0 1 1 0-18c4.59 0 8.377 3.436 8.93 7.876a1 1 0 1 1-1.984.248A7 7 0 0 0 12 6"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmEditOuLc;
