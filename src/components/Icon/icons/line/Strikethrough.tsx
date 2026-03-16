import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgStrikethrough = ({
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
        d="M8 7.54A3.54 3.54 0 0 1 11.54 4H12a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6h-.46A5.54 5.54 0 0 0 6 7.54a4.63 4.63 0 0 0 2.912 4.302L11.807 13h4.642a4.6 4.6 0 0 0-1.361-.842L9.655 9.985C8.655 9.585 8 8.617 8 7.54M17.865 15.347a.47.47 0 0 0-.461-.347h-.912c-.399 0-.655.463-.563.852q.07.295.071.607A3.54 3.54 0 0 1 12.46 20H12a4 4 0 0 1-4-4 1 1 0 1 0-2 0 6 6 0 0 0 6 6h.46A5.54 5.54 0 0 0 18 16.46q-.002-.574-.135-1.114"
      />
      <path
        fill={color}
        d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgStrikethrough;
