import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading23 = ({
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
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zM13 8a3 3 0 1 1 6 0v.624a6.8 6.8 0 0 1-.721 3.054L15.618 17H18a1 1 0 1 1 0 2h-4a1 1 0 0 1-.894-1.447l3.384-6.77c.335-.67.51-1.41.51-2.16V8a1 1 0 1 0-2 0v1a1 1 0 1 1-2 0zM7 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5h2v5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeading23;
