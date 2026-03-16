import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgBattery0 = ({
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
        d="M20.231 8.616 20 8.5c0-1.398 0-2.097-.228-2.648a3 3 0 0 0-1.624-1.624C17.597 4 16.898 4 15.5 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h8.7c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C20 17.597 20 16.898 20 15.5l.231-.116c.642-.32.963-.481 1.198-.72a2 2 0 0 0 .462-.748C22 13.6 22 13.24 22 12.522v-1.044c0-.718 0-1.077-.11-1.394a2 2 0 0 0-.461-.747c-.235-.24-.556-.4-1.198-.721"
      />
    </svg>
  );
};
export default SvgBattery0;
