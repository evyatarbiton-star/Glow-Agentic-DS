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
        d="M20.707 4.707a1 1 0 0 0-1.414-1.414l-2.5 2.5a1 1 0 0 0 1.414 1.414zm-6 6a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.505 12.142a3 3 0 0 1 2.789-.903l4.556.911.91 4.556a3 3 0 0 1-.902 2.789l-.767.71a3 3 0 0 1-4.16-.08L3.874 17.07a3 3 0 0 1-.08-4.161zM6.902 13.2a1 1 0 0 0-.93.301l-.71.767a1 1 0 0 0 .026 1.386l3.057 3.058a1 1 0 0 0 1.387.026l.767-.71a1 1 0 0 0 .3-.93l-.65-3.248zM13.878 5.707a3 3 0 0 1 4.243 0l.172.172a3 3 0 0 1 0 4.243l-.672.671a3 3 0 0 1-4.243 0l-.171-.171a3 3 0 0 1 0-4.243zm2.829 1.415a1 1 0 0 0-1.414 0l-.672.671a1 1 0 0 0 0 1.414l.172.172a1 1 0 0 0 1.414 0l.671-.672a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDarts;
