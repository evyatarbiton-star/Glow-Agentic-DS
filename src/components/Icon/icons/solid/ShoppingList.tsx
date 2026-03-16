import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShoppingList = ({
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
        d="M8.107 3.798c-.096-.35-.144-.523-.207-.603a.43.43 0 0 0-.215-.157c-.096-.036-.227-.03-.49-.02-.693.03-1.163.108-1.557.31a3 3 0 0 0-1.311 1.31C4 5.28 4 6.12 4 7.8v9.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.31C20 19.72 20 18.88 20 17.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.31c-.394-.202-.864-.28-1.557-.31-.263-.01-.394-.016-.49.02a.43.43 0 0 0-.215.157c-.063.08-.111.254-.207.603A3 3 0 0 1 13 6h-2a3 3 0 0 1-2.893-2.202M13 9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-3-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShoppingList;
