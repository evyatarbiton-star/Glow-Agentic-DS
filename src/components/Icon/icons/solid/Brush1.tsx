import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBrush1 = ({
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
        d="m9.669 16.54-1.997 3.256a2.52 2.52 0 1 1-3.467-3.467l3.255-1.997a.5.5 0 0 0 .092-.78l-1.137-1.138a2 2 0 0 1 0-2.828l.732-.732a.5.5 0 0 1 .707 0l7.293 7.293a.5.5 0 0 1 0 .707l-.732.732a2 2 0 0 1-2.829 0l-1.137-1.138a.5.5 0 0 0-.78.093M16.646 14.646 9.353 7.353a.5.5 0 0 1 0-.707l2.766-2.765a3 3 0 0 1 4.242 0L20.12 7.64a3 3 0 0 1 0 4.242l-2.765 2.765a.5.5 0 0 1-.708 0"
      />
    </svg>
  );
};
export default SvgBrush1;
