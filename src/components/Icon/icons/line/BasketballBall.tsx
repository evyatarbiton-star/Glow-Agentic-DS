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
        d="M5.5 4.4A9.98 9.98 0 0 1 8.95 11H11V2.05a10 10 0 0 1 2 0V11h2.05a9.98 9.98 0 0 1 3.45-6.6c.508.436.973.92 1.385 1.449A8 8 0 0 0 17.062 11h4.889a10 10 0 0 1 0 2h-4.89a8 8 0 0 0 2.824 5.151A10 10 0 0 1 18.5 19.6a9.98 9.98 0 0 1-3.45-6.6H13v8.95a10 10 0 0 1-2 0V13H8.95a9.98 9.98 0 0 1-3.45 6.6c-.508-.436-.973-.92-1.385-1.449A8 8 0 0 0 6.938 13H2.05a10 10 0 0 1 0-2h4.89a8 8 0 0 0-2.824-5.151A10 10 0 0 1 5.5 4.4"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBasketballBall;
