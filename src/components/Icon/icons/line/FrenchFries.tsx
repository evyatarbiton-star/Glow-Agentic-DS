import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFrenchFries = ({
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
        d="M5 10h2a1 1 0 0 1 2 0v3c.581.437 1.261.75 2 .9V7a1 1 0 1 1 2 0v6.9c.74-.15 1.42-.463 2-.9V9a1 1 0 1 1 2 0v1h2V9a3 3 0 0 0-4.105-2.79A3.001 3.001 0 0 0 9 7v.17A3 3 0 0 0 5 10"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.71 11a7.003 7.003 0 0 1-13.42 0h-.363a1 1 0 0 0-.964 1.263l1.363 5a1 1 0 0 0 .965.737h11.417a1 1 0 0 0 .965-.737l1.364-5A1 1 0 0 0 19.072 11zM17 9A5 5 0 1 1 7 9H4.927a3 3 0 0 0-2.894 3.79l1.364 5A3 3 0 0 0 6.29 20h11.417a3 3 0 0 0 2.895-2.21l1.363-5A3 3 0 0 0 19.072 9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFrenchFries;
