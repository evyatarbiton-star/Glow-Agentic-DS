import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLocationEditInLc = ({
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
        d="M12 4a7 7 0 0 0-7 7c0 2.206 1.336 4.268 3.205 5.888l3.441 2.982a.54.54 0 0 0 .708 0l3.441-2.982C17.664 15.268 19 13.206 19 11a7 7 0 0 0-7-7m-9 7a9 9 0 0 1 18 0c0 3.026-1.81 5.592-3.895 7.399l-3.441 2.983a2.54 2.54 0 0 1-3.328 0l-3.441-2.983C4.81 16.592 3 14.026 3 11"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="m9.923 11.183-.886 2.126a.5.5 0 0 0 .654.654l2.126-.887c.12-.05.23-.123.322-.216l2.563-2.563a1 1 0 0 0 0-1.414l-.585-.586a1 1 0 0 0-1.415 0L10.14 10.86a1 1 0 0 0-.216.323"
      />
    </svg>
  );
};
export default SvgLocationEditInLc;
