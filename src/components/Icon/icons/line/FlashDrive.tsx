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
        d="M13.709 3.877a3 3 0 0 1 4.243 0l2.171 2.171a3 3 0 0 1 0 4.243L17 13.414 10.586 7zm2.828 1.414a1 1 0 0 0-1.414 0L13.414 7 17 10.586l1.709-1.71a1 1 0 0 0 0-1.413z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.31 6.256a3.084 3.084 0 0 1 4.36 0l5.074 5.073a3.084 3.084 0 0 1 0 4.361l-3.357 3.357a6.67 6.67 0 1 1-9.434-9.434zm2.946 1.414a1.084 1.084 0 0 0-1.532 0l-3.357 3.357a4.671 4.671 0 1 0 6.606 6.606l3.357-3.357a1.084 1.084 0 0 0 0-1.532z"
        clipRule="evenodd"
      />
      <path fill={color} d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
};
export default SvgFlashDrive;
