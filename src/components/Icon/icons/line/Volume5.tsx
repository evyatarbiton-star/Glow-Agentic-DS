import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgVolume5 = ({
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
        d="M16.317 4.051a1 1 0 0 0-.633 1.897C18.292 6.818 20 8.948 20 12c0 3.053-1.708 5.182-4.316 6.051a1 1 0 1 0 .633 1.898C19.708 18.818 22 15.947 22 11.999c0-3.947-2.292-6.817-5.683-7.948"
      />
      <path
        fill={color}
        d="M16.707 9.293a1 1 0 0 0-1.414 1.414c.49.49.707.733.707 1.293s-.217.804-.707 1.293a1 1 0 0 0 1.414 1.414l.026-.025C17.243 14.172 18 13.415 18 12s-.756-2.17-1.266-2.68z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11 7.004c0-.96-1.223-1.369-1.8-.6L6.5 10H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5l2.7 3.596c.577.769 1.8.36 1.8-.6zM7.601 5.202C9.331 2.898 13 4.122 13 7.004v9.992c0 2.882-3.668 4.106-5.399 1.801L5.501 16H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVolume5;
