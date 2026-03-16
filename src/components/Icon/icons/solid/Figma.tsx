import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFigma = ({
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
        d="M4 4.5A2.5 2.5 0 0 1 6.5 2h3.864c.351 0 .636.285.636.636v3.728a.636.636 0 0 1-.636.636H6.5A2.5 2.5 0 0 1 4 4.5m0 7A2.5 2.5 0 0 1 6.5 9h3.864c.351 0 .636.285.636.636v3.728a.636.636 0 0 1-.636.636H6.5A2.5 2.5 0 0 1 4 11.5M13.636 2a.636.636 0 0 0-.636.636v3.728c0 .351.285.636.636.636H17.5a2.5 2.5 0 0 0 0-5zM13 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M7 16a3 3 0 1 0 0 6h.5a3.5 3.5 0 0 0 3.5-3.5v-1.954a.545.545 0 0 0-.546-.546z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFigma;
