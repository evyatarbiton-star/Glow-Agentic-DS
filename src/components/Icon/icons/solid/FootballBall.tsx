import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFootballBall = ({
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
        d="M2.27 10.74C3.14 8.788 5.89 4 12 4s8.86 4.788 9.73 6.74a3.09 3.09 0 0 1 0 2.52C20.86 15.212 18.109 20 12 20s-8.86-4.788-9.73-6.74a3.09 3.09 0 0 1 0-2.52M10 9a1 1 0 0 0-1 1v1H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h2v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFootballBall;
