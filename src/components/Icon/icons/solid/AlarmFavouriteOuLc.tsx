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
        d="M18.538 15.31a.5.5 0 0 1 .924 0l.79 1.898a.5.5 0 0 0 .418.306l1.874.163a.5.5 0 0 1 .301.86l-1.424 1.354a.5.5 0 0 0-.142.478l.481 2.015a.5.5 0 0 1-.747.542l-1.752-1.07a.5.5 0 0 0-.522 0l-1.752 1.07a.5.5 0 0 1-.747-.542l.48-2.015a.5.5 0 0 0-.14-.478l-1.42-1.354a.5.5 0 0 1 .302-.86l1.869-.163a.5.5 0 0 0 .418-.306z"
      />
      <path
        fill={color}
        d="M20.5 13c.276 0 .515-.224.5-.5-.26-4.738-4.197-8.5-9-8.5a9 9 0 1 0 .554 17.983.48.48 0 0 0 .446-.486V19a6 6 0 0 1 6-6zM4.6 5.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 1 1 1.2 1.6zM18.6 2.2a1 1 0 1 0-1.2 1.6l2 1.5a1 1 0 0 0 1.2-1.6z"
      />
    </svg>
  );
};
export default SvgAlarmFavouriteOuLc;
