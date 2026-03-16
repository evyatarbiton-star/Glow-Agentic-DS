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
        d="M18.538 15.31a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.163a.5.5 0 0 1 .301.86l-1.424 1.354a.5.5 0 0 0-.142.478l.481 2.014a.5.5 0 0 1-.747.543l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.543l.48-2.015a.5.5 0 0 0-.14-.477l-1.42-1.355a.5.5 0 0 1 .302-.86l1.869-.162a.5.5 0 0 0 .418-.306zM14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3 11a9 9 0 0 1 18 0q0 .586-.088 1.151a1 1 0 0 1-1.977-.302Q19 11.429 19 11a7 7 0 1 0-14 0c0 2.206 1.335 4.267 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0 1 1 0 1 1 1.31 1.512 2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.591 3 14.026 3 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLocationFavouriteOuLc;
