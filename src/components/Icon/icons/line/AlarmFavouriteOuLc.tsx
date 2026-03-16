import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgAlarmFavouriteOuLc = ({
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
        d="M18.538 15.31a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.163a.5.5 0 0 1 .301.86l-1.424 1.354a.5.5 0 0 0-.142.478l.481 2.014a.5.5 0 0 1-.747.543l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.543l.48-2.015a.5.5 0 0 0-.14-.477l-1.42-1.355a.5.5 0 0 1 .302-.86l1.869-.162a.5.5 0 0 0 .418-.306z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 6a7 7 0 1 0 .876 13.946 1 1 0 1 1 .248 1.984A9 9 0 1 1 12 4c4.59 0 8.377 3.436 8.93 7.876a1 1 0 1 1-1.984.248A7 7 0 0 0 12 6"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmFavouriteOuLc;
