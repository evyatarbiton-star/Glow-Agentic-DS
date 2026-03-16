import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVerifiedUser = ({
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
        d="M11.283 2.133a2 2 0 0 1 1.434 0l7 2.686A2 2 0 0 1 21 6.686v4.221a11 11 0 0 1-5.954 9.775l-2.128 1.099a2 2 0 0 1-1.835 0l-2.129-1.1A11 11 0 0 1 3 10.908v-4.22a2 2 0 0 1 1.283-1.868zm4.424 8.574a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVerifiedUser;
