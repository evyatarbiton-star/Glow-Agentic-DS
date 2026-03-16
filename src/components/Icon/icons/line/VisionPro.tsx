import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVisionPro = ({
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
        d="M3.382 8.581C4.789 7.017 7.394 6 12 6s7.21 1.017 8.618 2.581c1.383 1.537 1.383 3.371 1.382 4.366V13c0 1.325-.652 2.567-1.543 3.457S18.325 18 17 18c-1.306 0-2.278-.65-2.99-1.125l-.065-.043C13.163 16.311 12.655 16 12 16c-.654 0-1.163.31-1.945.832l-.065.043C9.278 17.351 8.306 18 7 18c-1.325 0-2.567-.652-3.457-1.543S2 14.325 2 13v-.053c0-.995-.001-2.83 1.382-4.366m1.486 1.338C4.026 10.854 4 11.981 4 13c0 .675.347 1.433.957 2.043S6.325 16 7 16c.654 0 1.163-.31 1.945-.832l.065-.043C9.722 14.649 10.694 14 12 14s2.278.65 2.99 1.125l.065.043c.782.522 1.29.832 1.945.832.675 0 1.433-.348 2.043-.957.61-.61.957-1.368.957-2.043 0-1.019-.026-2.146-.868-3.081C18.289 8.983 16.394 8 12 8s-6.29.983-7.132 1.919"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVisionPro;
