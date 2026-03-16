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
        d="M4.143 4.143a2.3 2.3 0 0 0-.505.184 3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h8.7c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 .973-.65z"
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
