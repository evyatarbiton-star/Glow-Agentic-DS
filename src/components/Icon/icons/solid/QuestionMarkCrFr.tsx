import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgQuestionMarkCrFr = ({
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m7.767-2.134a1 1 0 0 0 1.366-.365c.957-1.386 2.807.459 1.29 1.36-.272.163-.629.432-.9.763-.257.313-.492.743-.52 1.272A1 1 0 0 0 11.998 14c.762 0 .907-.405 1.053-.814.094-.262.19-.527.45-.686.826-.506 1.499-1.402 1.5-2.5a3 3 0 0 0-5.599-1.5 1 1 0 0 0 .365 1.366M10.997 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgQuestionMarkCrFr;
