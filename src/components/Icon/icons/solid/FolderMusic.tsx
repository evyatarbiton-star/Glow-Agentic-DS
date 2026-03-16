import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgFolderMusic = ({
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
        d="M9.758 4c.407-.001.766-.002 1.114.082a3 3 0 0 1 .867.36c.306.186.559.44.846.728l.83.83h4.424c.527 0 .982 0 1.356.03.395.032.789.103 1.167.296a3 3 0 0 1 1.311 1.311c.193.379.264.772.296 1.167.031.375.031.83.031 1.357v5.677c0 .527 0 .982-.03 1.356-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.297-.375.03-.83.03-1.356.03H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.31c-.193-.38-.264-.772-.296-1.168C2 16.82 2 16.364 2 15.838V8.16c0-.528 0-.982.03-1.357.033-.395.104-.788.297-1.167a3 3 0 0 1 1.311-1.31c.378-.194.772-.265 1.167-.297C5.18 4 5.635 4 6.161 4zM11 16a2 2 0 0 0 2-2v-1.705l.668.235A1 1 0 0 0 15 11.587v-.88a1 1 0 0 0-.668-.943l-2-.704A1 1 0 0 0 11 10m0 .003V12a2 2 0 1 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFolderMusic;
