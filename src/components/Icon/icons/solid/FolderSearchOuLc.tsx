import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFolderSearchOuLc = ({
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
        d="M18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 5.708 1.293l1 1a1 1 0 0 1-1.415 1.414l-1-1A3 3 0 0 1 15 18"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M9.758 4c.407 0 .766 0 1.114.083a3 3 0 0 1 .867.36c.306.186.559.44.846.728l.83.83h4.424c.527 0 .982 0 1.356.03.395.032.789.103 1.167.296a3 3 0 0 1 1.311 1.311c.193.379.264.772.296 1.167.031.375.031.83.031 1.357V12.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.219C21.62 13 21.48 13 21.2 13H19a6 6 0 0 0-6 6v.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.219C12.62 20 12.48 20 12.2 20H6.161c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.31c-.193-.38-.264-.773-.296-1.168A18 18 0 0 1 2 15.84V8.162c0-.528 0-.982.03-1.357.033-.395.104-.788.297-1.167a3 3 0 0 1 1.311-1.31c.378-.194.772-.265 1.167-.297C5.18 4 5.635 4 6.161 4z"
      />
    </svg>
  );
};
export default SvgFolderSearchOuLc;
