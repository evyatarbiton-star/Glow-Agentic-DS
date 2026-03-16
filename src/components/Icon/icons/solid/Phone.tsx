import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPhone = ({
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
        d="M20.482 19.518 20 20c-1.49 1.49-7 2-12.5-3.5S2.5 5.5 4 4l.49-.491a1.75 1.75 0 0 1 2.694.267l2.02 3.03a1.75 1.75 0 0 1-.219 2.208l-1.048 1.049c-.268.268-.358.663-.183.999.319.613.983 1.676 2.246 2.938s2.325 1.927 2.938 2.246c.335.175.73.085.999-.183l1.048-1.049a1.75 1.75 0 0 1 2.208-.218l3.02 2.013a1.76 1.76 0 0 1 .269 2.708"
      />
    </svg>
  );
};
export default SvgPhone;
