import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgHeavyRain = ({
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
        d="M6.895 16.447a1 1 0 0 0-1.79-.894l-1 2a1 1 0 1 0 1.79.894zM10.895 16.447a1 1 0 1 0-1.79-.894l-2 4a1 1 0 1 0 1.79.894zM18.447 15.106a1 1 0 0 1 .448 1.341l-1.5 3a1 1 0 1 1-1.79-.894l1.5-3a1 1 0 0 1 1.342-.447M14.895 16.447a1 1 0 1 0-1.79-.894l-2.5 5a1 1 0 1 0 1.79.894z"
      />
    </svg>
  );
};
export default SvgHeavyRain;
