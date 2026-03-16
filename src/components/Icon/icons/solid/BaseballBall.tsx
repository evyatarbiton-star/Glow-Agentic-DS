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
        fillRule="evenodd"
        d="M2 12c0-2.536.944-4.852 2.5-6.615A7.99 7.99 0 0 1 8 12a7.99 7.99 0 0 1-3.5 6.615A9.96 9.96 0 0 1 2 12m10 10a9.96 9.96 0 0 1-6-2 9.99 9.99 0 0 0 4-8 9.99 9.99 0 0 0-4-8 9.96 9.96 0 0 1 6-2c2.251 0 4.329.744 6 2a9.99 9.99 0 0 0-4 8 9.99 9.99 0 0 0 4 8 9.96 9.96 0 0 1-6 2m7.5-16.615A9.96 9.96 0 0 1 22 12a9.96 9.96 0 0 1-2.5 6.615A7.99 7.99 0 0 1 16 12a7.99 7.99 0 0 1 3.5-6.615"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBaseballBall;
