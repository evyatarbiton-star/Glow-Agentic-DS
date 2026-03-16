import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmRemoveInLc = ({
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
        fillRule="evenodd"
        d="M9.293 10.293a1 1 0 0 1 1.414 0L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 13l1.293 1.293a1 1 0 0 1-1.414 1.414L12 14.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 13l-1.293-1.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmRemoveInLc;
