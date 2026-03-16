import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFlashDrive = ({
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
        d="M7.847 6.718a2.465 2.465 0 0 1 3.486 0l5.949 5.95a2.465 2.465 0 0 1 0 3.485l-2.895 2.894a6.671 6.671 0 0 1-9.434-9.434zM8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M17.824 3.59a2 2 0 0 0-2.828 0l-1.203 1.203a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l1.203-1.202a2 2 0 0 0 0-2.829z"
      />
    </svg>
  );
};
export default SvgFlashDrive;
