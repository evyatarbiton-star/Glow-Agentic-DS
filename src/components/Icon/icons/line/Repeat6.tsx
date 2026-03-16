import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRepeat6 = ({
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
        d="M12 5a1 1 0 0 0 1 1h2a2 2 0 0 1 2 2v10a1 1 0 1 0 2 0V8a4 4 0 0 0-4-4h-2a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M17.293 18.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L18 16.586l-2.293-2.293a1 1 0 0 0-1.414 1.414zM6 5a1 1 0 0 0-1 1v10a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2V6a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M6.707 5.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L6 7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRepeat6;
