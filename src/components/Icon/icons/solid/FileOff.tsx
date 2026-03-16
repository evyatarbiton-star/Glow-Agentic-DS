import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileOff = ({
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
        d="M4.143 4.144C4 4.732 4 5.524 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.31 2.3 2.3 0 0 0 .184-.506zM18 8c-1.073-.003-1.667-.029-2.148-.228a3 3 0 0 1-1.624-1.624c-.199-.481-.224-1.075-.227-2.148H9a1 1 0 1 1 0-2h6.093999999999999a2 2 0 0 1 1.439.535c.027.025.054.052.108.106l2.718 2.718c.054.054.081.081.106.108A2 2 0 0 1 20 6.907V13a1 1 0 1 1-2 0z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFileOff;
