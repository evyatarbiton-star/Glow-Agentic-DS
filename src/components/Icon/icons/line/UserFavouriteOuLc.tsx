import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgUserFavouriteOuLc = ({
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
        d="M9 16a3 3 0 0 0-3 3 1 1 0 0 0 1 1h6a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3 5 5 0 0 1 5-5h6a1 1 0 1 1 0 2zM12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M18.538 15.309a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.162a.5.5 0 0 1 .301.861l-1.424 1.354a.5.5 0 0 0-.142.478l.481 2.014a.5.5 0 0 1-.747.543l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.543l.48-2.015a.5.5 0 0 0-.14-.477l-1.42-1.355a.5.5 0 0 1 .302-.86l1.869-.162a.5.5 0 0 0 .418-.306z"
      />
    </svg>
  );
};
export default SvgUserFavouriteOuLc;
