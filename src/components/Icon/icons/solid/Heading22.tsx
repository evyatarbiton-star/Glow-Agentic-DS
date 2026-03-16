import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading22 = ({
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
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748M16 5a3 3 0 0 0-3 3 1 1 0 1 0 2 0 1 1 0 1 1 2 0v2a1 1 0 0 1-1 1 1 1 0 1 0 0 2 1 1 0 0 1 1 1v2a1 1 0 1 1-2 0 1 1 0 1 0-2 0 3 3 0 1 0 6 0v-2c0-.768-.289-1.47-.764-2 .475-.53.764-1.232.764-2V8a3 3 0 0 0-3-3M7 6v5h2V6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0v-5H7v5a1 1 0 1 1-2 0V6a1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeading22;
