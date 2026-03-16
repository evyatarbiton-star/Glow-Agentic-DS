import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationFavouriteOuLc = ({
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
        d="M18.538 15.31a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.163a.5.5 0 0 1 .301.86l-1.424 1.354a.5.5 0 0 0-.142.478l.481 2.015a.5.5 0 0 1-.747.542l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.542l.48-2.015a.5.5 0 0 0-.14-.478l-1.42-1.354a.5.5 0 0 1 .302-.86l1.869-.163a.5.5 0 0 0 .418-.306z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2a9 9 0 0 0-9 9c0 3.026 1.81 5.592 3.895 7.399l3.441 2.983a2.54 2.54 0 0 0 2.353.525.445.445 0 0 0 .311-.44V19a6 6 0 0 1 6-6h1.35a.48.48 0 0 0 .475-.373A7.7 7.7 0 0 0 21 11a9 9 0 0 0-9-9m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationFavouriteOuLc;
