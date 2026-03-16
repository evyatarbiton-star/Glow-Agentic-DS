import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingBasket = ({
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
        d="M5.997 12a1 1 0 0 0-.97 1.247l1.398 5.493A3 3 0 0 0 9.333 21h5.333a3 3 0 0 0 2.908-2.263l1.39-5.491A1 1 0 0 0 17.996 12zM9 16a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4 0a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.707 4.707a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm2.586 0a1 1 0 0 1 1.414-1.414l1 1a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShoppingBasket;
