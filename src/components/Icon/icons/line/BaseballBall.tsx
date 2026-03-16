import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBaseballBall = ({
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
        d="M4.5 18.615A7.99 7.99 0 0 0 8 12a7.99 7.99 0 0 0-3.5-6.615c.451-.511.954-.976 1.5-1.386a9.99 9.99 0 0 1 4 8A9.99 9.99 0 0 1 6 20a10 10 0 0 1-1.5-1.385M18 3.999a9.99 9.99 0 0 0-4 8A9.99 9.99 0 0 0 18 20q.82-.617 1.5-1.385A7.99 7.99 0 0 1 16 12a7.99 7.99 0 0 1 3.5-6.615A10 10 0 0 0 18 3.999"
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
export default SvgBaseballBall;
