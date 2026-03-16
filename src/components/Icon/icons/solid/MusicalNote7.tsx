import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMusicalNote7 = ({
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
        d="M20 3.997a2 2 0 0 0-2.434-1.952l-7 1.555A2 2 0 0 0 9 5.552V18.5a1 1 0 1 0 2 0V9.802l7-1.555V16.5a1 1 0 1 0 2 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.5 20a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-9 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMusicalNote7;
