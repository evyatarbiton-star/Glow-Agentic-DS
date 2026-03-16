import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBank = ({
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
        d="M6 12a1 1 0 0 0-1 1v3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2v-3a1 1 0 1 0-2 0v3h-2v-3a1 1 0 1 0-2 0v3h-2v-3a1 1 0 1 0-2 0v3H7v-3a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 7.423a2 2 0 0 1 1.345-1.89l7-2.426a2 2 0 0 1 1.31 0l7 2.427A2 2 0 0 1 21 7.424V8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgBank;
