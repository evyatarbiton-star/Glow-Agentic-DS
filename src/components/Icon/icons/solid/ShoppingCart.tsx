import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingCart = ({
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
        d="M11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4 3a1 1 0 0 0 0 2h.36a1 1 0 0 1 .981.804l1.518 7.588A2 2 0 0 0 8.819 15h8.887a2 2 0 0 0 1.948-1.548l1.303-5.613A1.5 1.5 0 0 0 19.496 6H7.42l-.118-.588A3 3 0 0 0 4.36 3z"
      />
    </svg>
  );
};
export default SvgShoppingCart;
