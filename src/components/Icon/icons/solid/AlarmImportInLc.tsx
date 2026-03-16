import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmImportInLc = ({
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
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.707-6.293-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 1 1 1.414 1.414l-.293.293H15a1 1 0 1 1 0 2h-3.586l.293.293a1 1 0 0 1-1.414 1.414"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmImportInLc;
