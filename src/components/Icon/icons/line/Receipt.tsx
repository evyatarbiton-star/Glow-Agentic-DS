import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgReceipt = ({
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
        d="M4 3h16v15.492c0 2.056-2.344 3.233-3.994 2.005l-.704-.525a.5.5 0 0 0-.599 0l-.303.228a4 4 0 0 1-4.8 0l-.303-.227a.5.5 0 0 0-.599-.001l-.704.525C6.344 21.725 4 20.548 4 18.492zm2 2v13.492a.5.5 0 0 0 .799.4l.704-.524a2.5 2.5 0 0 1 2.994.005l.303.227a2 2 0 0 0 2.4 0l.303-.227a2.5 2.5 0 0 1 2.994-.005l.704.525a.5.5 0 0 0 .799-.401V5z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 8a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M3 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default SvgReceipt;
