import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgIceCream = ({
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
        d="m8.954 14 2.16 5.4a.954.954 0 0 0 1.771 0l2.16-5.4zm-1.477-2a1 1 0 0 0-.929 1.371l2.709 6.772a2.954 2.954 0 0 0 5.485 0l2.709-6.772A1 1 0 0 0 16.523 12z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m7.899 8.664-1.025.472A1.5 1.5 0 0 0 7.5 12h9a1.5 1.5 0 0 0 .625-2.864l-1.024-.472-.127-1.12a4 4 0 0 0-7.948 0zM17.962 7.32a6.001 6.001 0 0 0-11.924 0A3.5 3.5 0 0 0 7.5 14h9a3.5 3.5 0 0 0 1.462-6.681"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgIceCream;
