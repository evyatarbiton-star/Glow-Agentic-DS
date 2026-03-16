import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBatteryOff = ({
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
        d="M4.354 4.354A4 4 0 0 0 2 8v8a4 4 0 0 0 4 4h10a3.99 3.99 0 0 0 2.828-1.172l-1.414-1.414A2 2 0 0 1 16 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 5a1 1 0 0 1 1-1h6a4 4 0 0 1 4 4v.382l.342.17A3 3 0 0 1 22 11.237v1.646a2.81 2.81 0 0 1-1.553 2.512 1 1 0 1 1-.894-1.788.81.81 0 0 0 .447-.724v-1.646a1 1 0 0 0-.553-.894l-.894-.448A1 1 0 0 1 18 9V8a2 2 0 0 0-2-2h-6a1 1 0 0 1-1-1M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBatteryOff;
