import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBattery1001 = ({
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
        d="M6 9a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0zM10 9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zM15 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default SvgBattery1001;
