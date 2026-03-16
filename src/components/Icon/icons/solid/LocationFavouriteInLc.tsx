import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationFavouriteInLc = ({
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
        d="M3 11a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11m9.462-3.69a.5.5 0 0 0-.923 0l-.79 1.898a.5.5 0 0 1-.418.306l-1.869.163a.5.5 0 0 0-.301.86L9.58 11.89a.5.5 0 0 1 .14.478l-.48 2.015a.5.5 0 0 0 .747.542l1.752-1.07a.5.5 0 0 1 .522 0l1.752 1.07a.5.5 0 0 0 .747-.543l-.48-2.014a.5.5 0 0 1 .142-.478l1.423-1.354a.5.5 0 0 0-.3-.86l-1.875-.163a.5.5 0 0 1-.419-.306z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationFavouriteInLc;
