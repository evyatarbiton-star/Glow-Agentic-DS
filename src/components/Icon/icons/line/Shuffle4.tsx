import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgShuffle4 = ({
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
        d="M18 8a1 1 0 0 0 0-2h-2.868a3 3 0 0 0-2.572 1.457l-.017.029a1 1 0 1 0 1.715 1.029l.017-.03A1 1 0 0 1 15.132 8zM9.457 16.515a1 1 0 1 0-1.714-1.03l-.018.03a1 1 0 0 1-.857.485H4a1 1 0 1 0 0 2h2.868a3 3 0 0 0 2.572-1.456z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M19 17a1 1 0 0 1-1 1h-2.868a3 3 0 0 1-2.572-1.456L7.725 8.486A1 1 0 0 0 6.868 8H4a1 1 0 1 1 0-2h2.868A3 3 0 0 1 9.44 7.457l4.835 8.058a1 1 0 0 0 .857.485H18a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.707 16.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17l-2.293-2.293a1 1 0 0 1 1.414-1.414zM20.707 6.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 7l-2.293-2.293a1 1 0 0 1 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShuffle4;
