import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMailImportOuLc = ({
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
        d="M15.293 18.293a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L18.414 20H22a1 1 0 1 0 0-2h-3.586l.293-.293a1 1 0 0 0-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C21.62 13 21.48 13 21.2 13H19a6 6 0 0 0-6 6v.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C12.62 20 12.48 20 12.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2zm4.175-.366a1 1 0 0 1 1.39-.259l3.87 2.654a1 1 0 0 0 1.13 0l3.87-2.654a1 1 0 0 1 1.13 1.65l-3.868 2.654a3 3 0 0 1-3.394 0L6.434 9.825a1 1 0 0 1-.259-1.39"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMailImportOuLc;
