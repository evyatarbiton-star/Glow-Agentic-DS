import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgRain6 = ({
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
        d="m14.094 6.135-.681-.919a3.001 3.001 0 0 0-5.385 1.37l-.15 1.09-1 .458A1.5 1.5 0 0 0 7.5 11h8a2.5 2.5 0 1 0-.27-4.986zM7.5 13a3.5 3.5 0 0 1-1.453-6.685 5.001 5.001 0 0 1 8.972-2.29A4.5 4.5 0 1 1 15.5 13z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9 20a2 2 0 0 0 2-2c0-1.129-1.133-2.342-1.694-2.873a.44.44 0 0 0-.612 0C8.134 15.657 7 16.87 7 18a2 2 0 0 0 2 2M15 22a2 2 0 0 0 2-2c0-1.129-1.133-2.342-1.694-2.873a.44.44 0 0 0-.612 0C14.134 17.657 13 18.87 13 20a2 2 0 0 0 2 2"
      />
    </svg>
  );
};
export default SvgRain6;
