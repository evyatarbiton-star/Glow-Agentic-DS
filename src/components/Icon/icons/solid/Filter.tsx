import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFilter = ({
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
        d="M18.993 3H5.006C3.316 3 2.388 4.966 3.46 6.27l5.31 6.453A1 1 0 0 1 9 13.36v5.634c0 1.538 1.663 2.5 2.996 1.734l2-1.15A2 2 0 0 0 15 17.843v-4.484a1 1 0 0 1 .228-.636l5.31-6.452C21.613 4.966 20.684 3 18.994 3"
      />
    </svg>
  );
};
export default SvgFilter;
