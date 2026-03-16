import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgWiFi = ({
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
        d="M14 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 6C8.775 6 5.85 7.27 3.692 9.34a1 1 0 1 1-1.384-1.442A13.96 13.96 0 0 1 12 4c3.761 0 7.178 1.485 9.692 3.898a1 1 0 1 1-1.384 1.443A11.96 11.96 0 0 0 12 6"
      />
      <path
        fill={color}
        d="M12 10a7.97 7.97 0 0 0-5.684 2.371 1 1 0 1 1-1.422-1.407A9.97 9.97 0 0 1 12 8a9.97 9.97 0 0 1 7.106 2.964 1 1 0 1 1-1.421 1.407A7.97 7.97 0 0 0 12 10"
      />
      <path
        fill={color}
        d="M8.972 15.386A3.99 3.99 0 0 1 12 14c1.21 0 2.293.536 3.028 1.386a1 1 0 1 0 1.513-1.308A5.99 5.99 0 0 0 12 12a5.99 5.99 0 0 0-4.54 2.078 1 1 0 1 0 1.512 1.308"
      />
    </svg>
  );
};
export default SvgWiFi;
