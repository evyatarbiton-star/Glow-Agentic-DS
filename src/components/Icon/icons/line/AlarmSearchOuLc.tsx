import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmSearchOuLc = ({
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
        d="M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 5.708 1.293l1 1a1 1 0 0 1-1.415 1.414l-1-1A3 3 0 0 1 15 18"
        clipRule="evenodd"
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
export default SvgAlarmSearchOuLc;
