import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHourglass = ({
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
        d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.97a3 3 0 0 1-1.256 2.442L13.72 12l5.023 3.588A3 3 0 0 1 20 18.029V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.97a3 3 0 0 1 1.256-2.442L10.28 12 5.256 8.412A3 3 0 0 1 4 5.971zm8 5.771 5.581-3.987A1 1 0 0 0 18 5.972V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v.97a1 1 0 0 0 .419.815zm0 2.458-5.581 3.986A1 1 0 0 0 6 18.03V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.97a1 1 0 0 0-.419-.815z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M16 20H8v-.423a1 1 0 0 1 .5-.866l2.5-1.444a2 2 0 0 1 2 0l2.5 1.444a1 1 0 0 1 .5.866z"
      />
    </svg>
  );
};
export default SvgHourglass;
