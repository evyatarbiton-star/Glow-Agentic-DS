import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDoughnut = ({
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
        d="M10.854 3.831A2 2 0 0 1 9.75 6.435a6 6 0 0 0-3.703 6.318 2 2 0 0 1-3.97.495A10.003 10.003 0 0 1 8.25 2.728a2 2 0 0 1 2.605 1.103M5.44 16.994a2 2 0 0 1 2.81-.31A5.97 5.97 0 0 0 12 18c1.42 0 2.722-.491 3.75-1.315a2 2 0 0 1 2.5 3.12A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-6.25-2.194 2 2 0 0 1-.31-2.812M13.147 3.831a2 2 0 0 1 2.604-1.103 10 10 0 0 1 6.172 10.52 2 2 0 0 1-3.969-.495Q18 12.384 18 12a6 6 0 0 0-3.75-5.565 2 2 0 0 1-1.103-2.604"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDoughnut;
