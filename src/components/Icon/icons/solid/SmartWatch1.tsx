import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSmartWatch1 = ({
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
        d="M8 3v1h8V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M8 21v-1h8v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1M10.8 18c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 15.72 6 14.88 6 13.2v-2.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C8.28 6 9.12 6 10.8 6h2.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C18 8.28 18 9.12 18 10.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 18 14.88 18 13.2 18zM20 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"
      />
    </svg>
  );
};
export default SvgSmartWatch1;
