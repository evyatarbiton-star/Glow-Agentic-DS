import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgX = ({ size = "md", color = "currentColor", ...props }: IconProps) => {
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
        d="M19.753 4.659a1 1 0 1 0-1.506-1.317l-5.608 6.41 1.292 1.56zM11.36 14.249l-1.29-1.561-5.823 6.653a1 1 0 1 0 1.506 1.317z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.465 6.275C2.385 4.971 3.313 3 5.005 3H7.41a2 2 0 0 1 1.54.725l11.586 14c1.079 1.304.151 3.275-1.541 3.275H16.59a2 2 0 0 1-1.541-.725zM5.005 5l11.586 14h2.404L7.41 5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgX;
