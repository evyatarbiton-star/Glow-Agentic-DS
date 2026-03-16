import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgCampsite = ({
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
        d="M9.51 3.128a1 1 0 0 1 1.362.382L12 5.516l1.128-2.006a1 1 0 0 1 1.744.98l-1.725 3.066L19.585 19H20a1 1 0 1 1 0 2h-6.5a.5.5 0 0 1-.5-.5V17a1 1 0 1 0-2 0v3.5a.5.5 0 0 1-.5.5H4a1 1 0 1 1 0-2h.415l6.438-11.444L9.128 4.49a1 1 0 0 1 .382-1.362"
      />
    </svg>
  );
};
export default SvgCampsite;
