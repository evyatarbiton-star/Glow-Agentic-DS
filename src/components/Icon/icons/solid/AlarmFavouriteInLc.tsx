import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmFavouriteInLc = ({
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
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.462-12.69a.5.5 0 0 0-.924 0l-.789 1.898a.5.5 0 0 1-.418.306l-1.869.163a.5.5 0 0 0-.302.86l1.42 1.354a.5.5 0 0 1 .14.477l-.48 2.015a.5.5 0 0 0 .747.543l1.752-1.07a.5.5 0 0 1 .522 0l1.752 1.07a.5.5 0 0 0 .747-.543l-.48-2.014a.5.5 0 0 1 .141-.479l1.424-1.353a.5.5 0 0 0-.3-.86l-1.875-.163a.5.5 0 0 1-.419-.306z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmFavouriteInLc;
