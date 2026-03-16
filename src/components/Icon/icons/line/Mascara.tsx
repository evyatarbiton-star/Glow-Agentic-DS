import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMascara = ({
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
        d="M17 21a1 1 0 1 1-2 0 1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2v-6a1 1 0 1 1 2 0v6a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M15 9h2a1 1 0 0 0 .979-1.204l-.626-3A1 1 0 0 0 16.374 4h-.748a1 1 0 0 0-.98.796l-.625 3A1 1 0 0 0 15.001 9m2 2h-2a3 3 0 0 1-2.937-3.613l.626-3A3 3 0 0 1 15.626 2h.748a3 3 0 0 1 2.937 2.388l.626 3A3 3 0 0 1 17 11M7 8a1 1 0 0 0-1 1v1.17a3 3 0 0 0-1.976 3.208l.762 6A3 3 0 0 0 7.762 22h.476a3 3 0 0 0 2.976-2.622l.762-6A3 3 0 0 0 10 10.17V9a1 1 0 0 0-1-1zm-.992 5.126A1 1 0 0 1 7 12h2a1 1 0 0 1 .992 1.126l-.762 6a1 1 0 0 1-.992.874h-.476a1 1 0 0 1-.992-.874z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMascara;
