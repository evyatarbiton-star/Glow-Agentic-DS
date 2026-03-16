import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLightBulb = ({
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
        d="M9 20.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM16 16.93a8 8 0 1 0-8 0V17a1 1 0 0 0 1 1h1.5a.5.5 0 0 0 .5-.5v-4.086l-1.707-1.707a1 1 0 1 1 1.414-1.414L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13 13.414V17.5a.5.5 0 0 0 .5.5H15a1 1 0 0 0 1-1z"
      />
    </svg>
  );
};
export default SvgLightBulb;
