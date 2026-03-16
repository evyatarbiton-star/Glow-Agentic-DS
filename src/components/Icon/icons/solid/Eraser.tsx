import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEraser = ({
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
      <path fill={color} d="M9 19h11a1 1 0 1 1 0 2H9z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="m18.362 3.881 1.757 1.758a3 3 0 0 1 0 4.242l-4.058 4.058a.5.5 0 0 1-.707 0L10.06 8.646a.5.5 0 0 1 0-.707l4.058-4.058a3 3 0 0 1 4.243 0m-9.715 6.18a.5.5 0 0 0-.707 0L3.88 14.12a3 3 0 0 0 .07 4.309l2.163 2.03a2 2 0 0 0 1.369.54H9l4.94-4.938a.5.5 0 0 0 0-.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEraser;
