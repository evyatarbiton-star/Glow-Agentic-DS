import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBatteryCharging = ({
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
        d="M6 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 1 .553-.894l.894-.448a1 1 0 0 0 .553-.894v-1.528a1 1 0 0 0-.553-.894l-.894-.448A1 1 0 0 1 18 9V8a2 2 0 0 0-2-2zM2 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v.382l.342.17A3 3 0 0 1 22 11.237v1.528a3 3 0 0 1-1.658 2.683l-.342.171V16a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.555 8.168a1 1 0 0 1 .277 1.387L10.868 11H13a1 1 0 0 1 .832 1.555l-2 3a1 1 0 0 1-1.664-1.11L11.132 13H9a1 1 0 0 1-.832-1.555l2-3a1 1 0 0 1 1.387-.277"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBatteryCharging;
