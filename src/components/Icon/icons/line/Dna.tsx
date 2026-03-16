import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgDna = ({
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
        d="M18 3a1 1 0 1 1 2 0c0 2.46-.816 4.919-2.196 6.783-.655.884-1.454 1.653-2.368 2.217.914.564 1.713 1.333 2.368 2.217C19.184 16.081 20 18.541 20 21a1 1 0 1 1-2 0c0-2.04-.684-4.081-1.804-5.592C15.077 13.897 13.597 13 12 13s-3.077.897-4.196 2.408C6.684 16.918 6 18.959 6 21a1 1 0 1 1-2 0c0-2.46.816-4.919 2.196-6.783.655-.884 1.454-1.653 2.368-2.217-.914-.564-1.713-1.333-2.368-2.217C4.816 7.919 4 5.459 4 3a1 1 0 0 1 2 0c0 2.04.684 4.081 1.804 5.592C8.923 10.103 10.403 11 12 11s3.077-.897 4.196-2.408C17.316 7.082 18 5.041 18 3"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M9 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm2 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 10a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-3 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDna;
