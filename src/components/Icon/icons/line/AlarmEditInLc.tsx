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
        d="M12 6a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m9.923 13.182-.886 2.126a.5.5 0 0 0 .654.654l2.126-.886a1 1 0 0 0 .322-.216l2.563-2.563a1 1 0 0 0 0-1.414l-.585-.586a1 1 0 0 0-1.415 0L10.14 12.86a1 1 0 0 0-.216.322M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmEditInLc;
