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
        d="M20.566 13.392C21.2 14.118 22 15.198 22 16.528A3.47 3.47 0 0 1 18.528 20H5.472A3.47 3.47 0 0 1 2 16.528c0-1.33.799-2.41 1.434-3.136.324-.37.566-.83.566-1.392s-.242-1.021-.566-1.392C2.8 9.882 2 8.802 2 7.472A3.47 3.47 0 0 1 5.472 4h13.056A3.47 3.47 0 0 1 22 7.472c0 1.33-.799 2.41-1.434 3.136-.324.37-.566.83-.566 1.392 0 .563.242 1.021.566 1.392M20 16.528c0-.543-.342-1.136-.94-1.82C18.524 14.096 18 13.188 18 12s.524-2.095 1.06-2.709c.598-.683.94-1.276.94-1.819C20 6.66 19.34 6 18.528 6H5.472C4.66 6 4 6.66 4 7.472c0 .543.342 1.136.94 1.82C5.476 9.904 6 10.812 6 12s-.524 2.095-1.06 2.709c-.598.683-.94 1.276-.94 1.819C4 17.34 4.66 18 5.472 18h13.056C19.34 18 20 17.34 20 16.528"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4.707-.293-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414M13 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCouponDiscount;
