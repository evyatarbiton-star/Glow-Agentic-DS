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
        d="M12 4a7 7 0 0 0-7 7c0 2.206 1.336 4.268 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l3.441-2.982C17.664 15.268 19 13.206 19 11a7 7 0 0 0-7-7m-9 7a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M11.538 7.31a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.162a.5.5 0 0 1 .301.861l-1.424 1.353a.5.5 0 0 0-.141.479l.48 2.014a.5.5 0 0 1-.747.543l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.543l.48-2.015a.5.5 0 0 0-.14-.477l-1.42-1.355a.5.5 0 0 1 .302-.86l1.869-.162a.5.5 0 0 0 .418-.306z"
      />
    </svg>
  );
};
export default SvgLocationFavouriteInLc;
