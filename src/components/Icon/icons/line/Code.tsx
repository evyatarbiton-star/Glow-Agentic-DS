import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCode = ({
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
        d="M6.894 6.447a1 1 0 0 0-1.788-.894l-3 6a1 1 0 0 0 0 .894l3 6a1 1 0 1 0 1.788-.894L4.118 12zM17.106 6.447a1 1 0 1 1 1.788-.894l3 6a1 1 0 0 1 0 .894l-3 6a1 1 0 1 1-1.788-.894L19.882 12z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M14.275 4.038a1 1 0 0 1 .686 1.237l-4 14a1 1 0 1 1-1.923-.55l4-14a1 1 0 0 1 1.236-.687"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCode;
