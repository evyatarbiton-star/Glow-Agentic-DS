import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmRemoveOuLc = ({
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
        d="M16.293 16.293a1 1 0 0 1 1.414 0L19 17.586l1.293-1.293a1 1 0 0 1 1.414 1.414L20.414 19l1.293 1.293a1 1 0 0 1-1.414 1.414L19 20.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 19l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a7 7 0 1 0 .876 13.946 1 1 0 1 1 .248 1.984A9 9 0 1 1 21 13a1 1 0 1 1-2 0 7 7 0 0 0-7-7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmRemoveOuLc;
