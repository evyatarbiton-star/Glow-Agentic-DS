import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEject1 = ({
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
        d="M3 18a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3m3-1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zM12 5.188 5.768 11h12.456zm-1.023-1.781a1.5 1.5 0 0 1 2.047 0l7.492 6.997c.995.929.337 2.596-1.024 2.596H4.499c-1.362 0-2.019-1.668-1.023-2.597z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEject1;
