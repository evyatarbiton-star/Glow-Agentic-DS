import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThermometer1 = ({
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
        d="M5.646 16.06a.5.5 0 0 0-.707 0l-1.32 1.32a2.121 2.121 0 1 0 3 3l1.32-1.32a.5.5 0 0 0 0-.707zM19.761 10.243l-5.672 5.672a3 3 0 0 1-1.394.789l-2.588.647a.5.5 0 0 1-.475-.131l-2.848-2.848a.5.5 0 0 1-.131-.475l.647-2.588a3 3 0 0 1 .789-1.394l5.672-5.672a4.243 4.243 0 1 1 6 6m-3.053-2.947a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThermometer1;
