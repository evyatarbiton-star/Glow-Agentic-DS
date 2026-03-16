import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSaltShaker = ({
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
        d="M5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M13.119 3.882a3 3 0 0 1 4.242 0l2.768 2.766a3 3 0 0 1 0 4.243l-6.237 6.237a3 3 0 0 1-4.243 0l-2.767-2.767a3 3 0 0 1 0-4.243zm2.828 1.414 2.768 2.767a1 1 0 0 1 0 1.414l-3.412 3.412-4.182-4.182 3.412-3.411a1 1 0 0 1 1.414 0m-6.24 4.825-1.411 1.412a1 1 0 0 0 0 1.414l2.767 2.767a1 1 0 0 0 1.414 0l1.412-1.411z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSaltShaker;
