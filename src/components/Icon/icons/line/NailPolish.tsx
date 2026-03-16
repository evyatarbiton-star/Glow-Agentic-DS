import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgNailPolish = ({
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
        d="M4.708 18.81C2.59 14.814 5.487 10 10.009 10h3.983c4.522 0 7.419 4.814 5.301 8.81l-.564 1.063A4 4 0 0 1 15.195 22h-6.39a4 4 0 0 1-3.534-2.127zM10.009 12c-3.015 0-4.946 3.21-3.534 5.873l.564 1.064A2 2 0 0 0 8.806 20h6.39a2 2 0 0 0 1.766-1.063l.564-1.064C18.938 15.21 17.006 12 13.992 12z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M8.789 4.628A3 3 0 0 1 11.766 2h.469a3 3 0 0 1 2.976 2.628l.781 6.248A1 1 0 0 1 15 12H9a1 1 0 0 1-.992-1.124zM11.766 4a1 1 0 0 0-.993.876L10.133 10h3.734l-.64-5.124A1 1 0 0 0 12.235 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgNailPolish;
