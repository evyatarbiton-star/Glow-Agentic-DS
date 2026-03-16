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
        d="M3.753 10h16.494l-1.749 7.868A4 4 0 0 1 14.593 21H9.408a4 4 0 0 1-3.905-3.132zm2.494 2 1.207 5.434A2 2 0 0 0 9.407 19h5.187a2 2 0 0 0 1.952-1.566L17.753 12zM10.707 4.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm2.586 0a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M10 14a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1M3 9a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShoppingBasket;
