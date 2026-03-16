import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThunderstorm5 = ({
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
        d="M6.895 16.447a1 1 0 0 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894zM7.895 20.447a1 1 0 0 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894zM17.447 15.106a1 1 0 0 1 .448 1.341l-.5 1a1 1 0 1 1-1.79-.894l.5-1a1 1 0 0 1 1.342-.447M18.895 20.447a1 1 0 1 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.447 15.106a1 1 0 0 1 .447 1.341l-.276.553H13a1 1 0 0 1 .894 1.447l-1.5 3a1 1 0 1 1-1.788-.894L11.382 19H10a1 1 0 0 1-.894-1.447l1-2a1 1 0 0 1 1.341-.447"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThunderstorm5;
