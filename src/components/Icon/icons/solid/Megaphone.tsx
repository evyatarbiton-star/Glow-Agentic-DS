import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMegaphone = ({
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
        d="M9 18.315v-1.648A.667.667 0 0 0 8.333 16H6.018a.795.795 0 0 0-.771.988l.434 1.736A1.685 1.685 0 0 0 9 18.315M18 10.778C18 9.796 18.796 9 19.778 9H20a2 2 0 1 1 0 4h-.222A1.78 1.78 0 0 1 18 11.222zM6 8a3 3 0 1 0 0 6h2.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"
      />
      <path
        fill={color}
        d="M11.248 7.856a.5.5 0 0 0-.248.431v5.426a.5.5 0 0 0 .247.432l5.989 3.51c1.667.976 3.764-.226 3.764-2.157v-8.99c0-1.93-2.096-3.132-3.762-2.157z"
      />
    </svg>
  );
};
export default SvgMegaphone;
