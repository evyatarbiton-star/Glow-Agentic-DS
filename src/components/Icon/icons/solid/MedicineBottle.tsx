import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMedicineBottle = ({
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
        d="M6.5 10A1.5 1.5 0 0 0 5 11.5V19a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7.5a1.5 1.5 0 0 0-1.5-1.5zm4.5 4a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1zM4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2.5a.5.5 0 0 1-.5-.5V7a1 1 0 1 0-2 0v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V7a1 1 0 1 0-2 0v.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMedicineBottle;
