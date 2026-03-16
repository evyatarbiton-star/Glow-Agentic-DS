import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFileImportOuLc = ({
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
        d="M18.707 16.293a1 1 0 0 1 0 1.414l-.293.293H22a1 1 0 1 1 0 2h-3.586l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C13 2.38 13 2.52 13 2.8V5a4 4 0 0 0 4 4h2.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C20 9.38 20 9.52 20 9.8v2.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C19.62 13 19.48 13 19.2 13H19a6 6 0 0 0-6 6v2.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C12.62 22 12.48 22 12.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2z"
      />
      <path
        fill={color}
        d="M15 2.707a.707.707 0 0 1 1.207-.5l3.586 3.586a.707.707 0 0 1-.5 1.207H17a2 2 0 0 1-2-2z"
      />
    </svg>
  );
};
export default SvgFileImportOuLc;
