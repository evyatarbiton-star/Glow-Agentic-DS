import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeading17 = ({
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
        d="M14 8c0-2.212 1.799-4 4.006-4C20.206 4 22 5.784 22 7.989a7.64 7.64 0 0 1-1.283 4.239L16.869 18H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.832-1.555l4.884-7.326A5.64 5.64 0 0 0 20 7.989 1.994 1.994 0 0 0 18.006 6 2.005 2.005 0 0 0 16 8v1a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1 1v6h6V5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0v-6H4v6a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default SvgHeading17;
