import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBasketballBall = ({
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
        d="M11 2.05A9.96 9.96 0 0 0 5.5 4.4 9.98 9.98 0 0 1 8.95 11H11zM5.5 19.6a9.96 9.96 0 0 0 5.5 2.351v-8.95H8.95A9.98 9.98 0 0 1 5.5 19.6m7.5 2.351a9.96 9.96 0 0 0 5.5-2.351 9.98 9.98 0 0 1-3.451-6.6h-2.05zm5.5-17.55A9.96 9.96 0 0 0 13 2.05V11h2.049a9.98 9.98 0 0 1 3.45-6.6m1.384 1.448A9.95 9.95 0 0 1 21.95 11h-4.889a8 8 0 0 1 2.823-5.15M21.95 13a9.95 9.95 0 0 1-2.066 5.152A8 8 0 0 1 17.061 13zM4.115 18.152A9.95 9.95 0 0 1 2.049 13h4.889a8 8 0 0 1-2.823 5.152M2.049 11a9.95 9.95 0 0 1 2.066-5.15A8 8 0 0 1 6.938 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBasketballBall;
