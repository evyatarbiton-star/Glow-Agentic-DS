import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmLockedInLc = ({
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
      <path fill={color} d="M12 11a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-6 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1v-1a3 3 0 1 1 6 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmLockedInLc;
