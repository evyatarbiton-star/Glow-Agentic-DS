import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgThunderstorm7 = ({
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
        d="M4 9.5A3.5 3.5 0 0 0 7.5 13h8a4.5 4.5 0 1 0-.48-8.975 5.001 5.001 0 0 0-8.973 2.29A3.5 3.5 0 0 0 4 9.5"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M6.895 16.447a1 1 0 0 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894zM7.895 20.447a1 1 0 0 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894zM17.447 15.106a1 1 0 0 1 .448 1.341l-.5 1a1 1 0 1 1-1.79-.894l.5-1a1 1 0 0 1 1.342-.447M18.895 20.447a1 1 0 1 0-1.79-.894l-.5 1a1 1 0 1 0 1.79.894z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.447 15.106a1 1 0 0 1 .447 1.341l-.276.553H13a1 1 0 0 1 .894 1.447l-1.5 3a1 1 0 1 1-1.788-.894L11.382 19H10a1 1 0 0 1-.894-1.447l1-2a1 1 0 0 1 1.341-.448"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgThunderstorm7;
