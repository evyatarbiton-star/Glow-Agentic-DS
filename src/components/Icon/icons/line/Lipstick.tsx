import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLipstick = ({
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
        d="M14 13a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0zm3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1M8 8a3 3 0 0 0-3 3v2.764c-.614.55-1 1.348-1 2.236v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-3c0-.889-.386-1.687-1-2.236V11a3 3 0 0 0-3-3m1 7H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-2-2h2v-2a1 1 0 1 0-2 0z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6 5a3 3 0 0 1 3-3 1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
      />
    </svg>
  );
};
export default SvgLipstick;
