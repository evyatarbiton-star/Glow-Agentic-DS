import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgQuestionMarkSqFr = ({
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
        d="M3.436 5.184C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6V9.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 3 16.84 3 14.6 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m6.331 4.682a1 1 0 0 0 1.366-.365c.957-1.386 2.807.459 1.29 1.36-.272.163-.629.432-.9.763-.256.313-.492.743-.52 1.272A1 1 0 0 0 11.998 14c.762 0 .907-.405 1.053-.814.095-.262.19-.527.45-.686.826-.506 1.5-1.402 1.5-2.5a3 3 0 0 0-5.599-1.5 1 1 0 0 0 .365 1.366M10.997 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgQuestionMarkSqFr;
