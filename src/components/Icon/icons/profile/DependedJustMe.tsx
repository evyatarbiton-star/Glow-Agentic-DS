import type { SpecialtyIconProps } from "../../Icon.types";
const SvgDependedJustMe = ({
  size = 32,
  className,
  ...props
}: SpecialtyIconProps) => {
  const px = typeof size === "number" ? size : size === "sm" ? 32 : 40;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill="#FE9767"
        d="M25.1 6.453c-1.52-3.39-7.81-4.75-9.13.38-1.54 6 8.91 12.2 8.91 12.2s9.2-5.23 9.19-10.78c0-4.77-7.22-6.46-8.97-1.81z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M30 38.867s-.83-13.69-8.56-17.5M21 18.25c3.21-3.59 1.51-10.26-3.78-10.8-4.7-.48-7.06 3.96-6.5 8.31.7 5.38 7.06 6.08 10.27 2.49"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12.99 19.992C3.82 24.222 5 38.882 5 38.882"
      />
    </svg>
  );
};
export default SvgDependedJustMe;
