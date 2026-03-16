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
        d="m15.924 19.182-.886 2.126a.5.5 0 0 0 .654.654l2.126-.886Q18 21 18.14 20.86l3.563-3.563a1 1 0 0 0 0-1.414l-.585-.586a1 1 0 0 0-1.415 0L16.14 18.86a1 1 0 0 0-.216.322M20.5 13c.276 0 .515-.224.5-.5-.26-4.738-4.197-8.5-9-8.5a9 9 0 1 0 .554 17.983.48.48 0 0 0 .446-.486V19a6 6 0 0 1 6-6zM4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmEditOuLc;
