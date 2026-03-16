import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDarts = ({
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
        d="M20.707 4.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm-8 8a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M5.873 13H11v5.127a2 2 0 0 1-.641 1.467l-.947.877a2 2 0 0 1-2.774-.052L3.581 17.36a2 2 0 0 1-.053-2.773l.878-.947A2 2 0 0 1 5.873 13M17.586 6.586l-.172-.172a2 2 0 0 0-2.829 0l-.671.672a2 2 0 0 0 0 2.828l.172.172a2 2 0 0 0 2.828 0l.671-.672a2 2 0 0 0 0-2.828"
      />
    </svg>
  );
};
export default SvgDarts;
