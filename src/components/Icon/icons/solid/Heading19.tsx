import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading19 = ({
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
      <path fill={color} d="M15 16a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm14.949-3.716a1 1 0 0 1-.633 1.264l-.037.013A3.33 3.33 0 0 0 15 10.123v.048A3 3 0 0 1 19 13v2.999a3 3 0 0 1-6 0v-5.877a5.33 5.33 0 0 1 3.646-5.06l.038-.012a1 1 0 0 1 1.265.633M7 6v5h2V6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0v-5H7v5a1 1 0 1 1-2 0V6a1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeading19;
