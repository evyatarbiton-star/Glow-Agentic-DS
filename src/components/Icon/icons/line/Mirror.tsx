import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMirror = ({
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
        d="M12 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.707 7.707a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414zm4 2a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 1 0 1.414 1.414zM17 18H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2M7 16a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMirror;
