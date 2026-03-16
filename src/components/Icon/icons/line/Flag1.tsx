import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFlag1 = ({
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
        d="M6 16V4h11.496c2.111 0 3.273 2.455 1.932 4.087L17.856 10l1.572 1.913c1.34 1.632.18 4.087-1.932 4.087zm2-2h9.496a.5.5 0 0 0 .387-.817L16.31 11.27a2 2 0 0 1 0-2.54l1.572-1.913A.5.5 0 0 0 17.496 6H8z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M7 2a1 1 0 0 0-1 1v17H5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8V3a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default SvgFlag1;
