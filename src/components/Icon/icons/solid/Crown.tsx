import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCrown = ({
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
        d="M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zM3.014 5.159a.5.5 0 0 1 .761-.52l4.772 3.07a.5.5 0 0 0 .71-.184l2.303-4.261a.5.5 0 0 1 .88 0l2.304 4.262a.5.5 0 0 0 .71.183l4.781-3.07a.5.5 0 0 1 .76.52l-1.832 9.04a1 1 0 0 1-.98.801H5.819a1 1 0 0 1-.98-.802z"
      />
    </svg>
  );
};
export default SvgCrown;
