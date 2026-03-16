import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBasketballHoop = ({
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
        d="M7 17h2v2a1 1 0 1 1-2 0zm8 0h2v2a1 1 0 1 1-2 0zm-2 0h-2v2a1 1 0 1 0 2 0zM2.218 5.092C2 5.52 2 6.08 2 7.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 17 4.08 17 5.2 17H7v-4a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2v4h1.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 15.48 22 14.92 22 13.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 4 19.92 4 18.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M13 13h2v2h-2zm-2 0H9v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBasketballHoop;
