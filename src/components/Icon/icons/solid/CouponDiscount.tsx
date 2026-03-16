import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCouponDiscount = ({
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
        d="M20.874 14.611c.504.572 1.126 1.453 1.126 2.535A2.854 2.854 0 0 1 19.146 20H4.854A2.854 2.854 0 0 1 2 17.146c0-1.082.623-1.963 1.126-2.535C3.52 14.165 4 13.357 4 12s-.481-2.165-.874-2.611C2.623 8.817 2 7.936 2 6.854A2.854 2.854 0 0 1 4.854 4h14.292A2.854 2.854 0 0 1 22 6.854c0 1.082-.622 1.963-1.126 2.535C20.48 9.835 20 10.643 20 12s.481 2.165.874 2.611m-6.167-5.318a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCouponDiscount;
