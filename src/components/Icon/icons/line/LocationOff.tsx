import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationOff = ({
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
        d="m16.364 16.364 1.414 1.414q-.33.324-.673.62l-3.441 2.983a2.54 2.54 0 0 1-3.328 0L6.895 18.4C4.81 16.59 3 14.026 3 10.999c0-2.23.812-4.271 2.156-5.843l1.42 1.42A6.97 6.97 0 0 0 5 11c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l3.441-2.982q.294-.255.57-.524M9.188 2.448A9 9 0 0 1 21 11c0 1.028-.21 2.007-.57 2.92a1 1 0 0 1-1.86-.733c.277-.705.43-1.436.43-2.187a7 7 0 0 0-9.187-6.652 1 1 0 0 1-.625-1.9"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationOff;
