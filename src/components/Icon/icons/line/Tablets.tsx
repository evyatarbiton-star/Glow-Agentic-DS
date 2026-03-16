import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTablets = ({
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
        d="M11 15a4 4 0 0 1 6.032-3.446l-5.478 5.478A4 4 0 0 1 11 15m1.968 3.446a4 4 0 0 0 5.478-5.478zM15 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 5a4 4 0 1 0 .801 7.92l.398 1.96Q9.615 15 9 15a6 6 0 1 1 5.88-4.801L12.92 9.8q.079-.388.08-.801a4 4 0 0 0-4-4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTablets;
