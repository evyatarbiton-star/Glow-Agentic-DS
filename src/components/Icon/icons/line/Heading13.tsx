import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading13 = ({
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
        d="M20.98 4.804a1 1 0 0 1-.784 1.177l-.146.029a5.04 5.04 0 0 0-4.032 4.515A4 4 0 0 1 22 14v2a4 4 0 1 1-8 0v-5.05a7.04 7.04 0 0 1 5.657-6.901l.147-.03a1 1 0 0 1 1.177.785M16 16a2 2 0 1 0 4 0v-2a2 2 0 0 0-4 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1 1v6h6V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H4v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgHeading13;
