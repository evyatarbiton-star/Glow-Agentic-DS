import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFrenchFries = ({
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
        d="M12 15a4 4 0 0 0 3.969-3.501c.034-.274.255-.499.53-.499h3.506a2 2 0 0 1 1.916 2.573l-1.494 5A2 2 0 0 1 18.51 20H5.492a2 2 0 0 1-1.917-1.43l-1.487-5A2 2 0 0 1 4.005 11H7.5c.276 0 .496.225.53.499A4 4 0 0 0 12 15"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M10 6a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0zM16 8a2 2 0 1 1 4 0v.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM4.062 8.505c-.068.268.162.495.438.495h3c.276 0 .507-.227.438-.495a2 2 0 0 0-3.876 0"
      />
    </svg>
  );
};
export default SvgFrenchFries;
