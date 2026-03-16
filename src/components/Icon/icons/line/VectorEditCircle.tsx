import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVectorEditCircle = ({
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
        d="M10.959 5.005a1 1 0 0 1-.673 1.243 6.02 6.02 0 0 0-4.037 4.037 1 1 0 0 1-1.917-.57A8.02 8.02 0 0 1 9.715 4.33a1 1 0 0 1 1.244.674m2.083 0a1 1 0 0 1 1.244-.674 8.02 8.02 0 0 1 5.383 5.384 1 1 0 0 1-1.917.57 6.02 6.02 0 0 0-4.037-4.037 1 1 0 0 1-.673-1.243m-8.037 8.037a1 1 0 0 1 1.244.673 6.02 6.02 0 0 0 4.037 4.037 1 1 0 0 1-.57 1.917 8.02 8.02 0 0 1-5.384-5.384 1 1 0 0 1 .673-1.244m13.99 0a1 1 0 0 1 .674 1.243 8.02 8.02 0 0 1-5.383 5.384 1 1 0 0 1-.57-1.917 6.02 6.02 0 0 0 4.036-4.037 1 1 0 0 1 1.244-.673"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m14 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVectorEditCircle;
