import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgEyedropper = ({
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
        d="M21 19a2 2 0 0 1-4 0c0-1.128 1.133-2.342 1.694-2.873a.44.44 0 0 1 .612 0C19.866 16.658 21 17.872 21 19"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m10.5 9.086 4.415 4.414-3.903 3.903q-.356.354-.758.656l-3.226 2.413c-2.312 1.729-5.229-1.187-3.5-3.5l2.414-3.226q.301-.402.656-.758zm0 2.828-2.488 2.489q-.255.253-.469.54L5.13 18.17c-.11.146-.122.26-.112.345.011.1.063.212.159.308a.54.54 0 0 0 .308.16c.084.01.199-.004.345-.113l3.227-2.413q.286-.215.54-.469l2.49-2.488z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M20.087 3.913a3.12 3.12 0 0 0-4.415 0l-1.325 1.325a3 3 0 0 0-3.299.639L9.877 7.048a3 3 0 0 0 0 4.243l2.831 2.832a3 3 0 0 0 4.243 0l1.172-1.172a3 3 0 0 0 .638-3.299l1.326-1.325a3.12 3.12 0 0 0 0-4.414m-3.379 6.21L13.877 7.29a1 1 0 0 0-1.415 0l-1.171 1.172a1 1 0 0 0 0 1.414l2.832 2.831a1 1 0 0 0 1.414 0l1.171-1.171a1 1 0 0 0 0-1.414m.792-2.037 1.173-1.173a1.121 1.121 0 1 0-1.586-1.586L15.914 6.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEyedropper;
