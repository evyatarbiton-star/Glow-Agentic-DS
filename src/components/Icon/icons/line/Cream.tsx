import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCream = ({
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
        d="M6 12a3.6 3.6 0 0 1-.82-1.825C4.89 8.115 6.437 6 8.81 6h1.704c.82 0 1.485-.665 1.485-1.486V3.463c0-.314.305-.537.604-.442l2.523.8c3.44 1.09 4.876 5.175 2.873 8.179zm10.76-2H7.184c-.204-.967.51-2 1.627-2h1.704a3.49 3.49 0 0 0 3.34-2.485l.667.212c1.846.585 2.778 2.536 2.24 4.273"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6zm3-1a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCream;
