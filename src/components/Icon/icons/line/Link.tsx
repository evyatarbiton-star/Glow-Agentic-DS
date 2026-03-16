import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLink = ({
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
        d="M12.066 4.527a5.24 5.24 0 0 1 7.403 7.418l-1.762 1.762a1 1 0 0 1-1.414-1.414l1.762-1.762a3.24 3.24 0 0 0-4.578-4.587L11.706 7.71a1 1 0 1 1-1.412-1.418zm-4.36 5.764a1 1 0 0 1 .003 1.415l-1.765 1.771a3.24 3.24 0 0 0 4.587 4.578l1.762-1.762a1 1 0 0 1 1.414 1.414l-1.762 1.762a5.24 5.24 0 0 1-7.418-7.403l1.764-1.772a1 1 0 0 1 1.415-.003"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLink;
