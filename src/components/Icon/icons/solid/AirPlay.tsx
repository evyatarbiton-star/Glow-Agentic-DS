import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAirPlay = ({
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
        d="m8.2 18.4 3-4.003a1 1 0 0 1 1.6 0l3.001 4.003a1 1 0 0 1-.8 1.6H9a1 1 0 0 1-.8-1.6"
      />
      <path
        fill={color}
        d="M2.327 5.638C2 6.28 2 7.12 2 8.8v3.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.602.307 1.379.326 2.86.327a.5.5 0 0 0 .401-.2l2.7-3.603a3 3 0 0 1 4.801 0l2.7 3.603a.5.5 0 0 0 .401.2c1.482-.001 2.259-.02 2.861-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 4 18.88 4 17.2 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311"
      />
    </svg>
  );
};
export default SvgAirPlay;
