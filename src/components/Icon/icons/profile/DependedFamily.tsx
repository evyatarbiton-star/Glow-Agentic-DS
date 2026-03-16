import type { SpecialtyIconProps } from "../../Icon.types";
const SvgDependedFamily = ({
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
        d="M20.15 6.453c-1.52-3.39-7.81-4.75-9.13.38-1.54 6 8.91 12.2 8.91 12.2s9.2-5.23 9.19-10.78c0-4.77-7.22-6.46-8.97-1.81z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M9.09 18.68C.84 23.21 1.48 38.87 1.48 38.87M34.13 24.172c4.39 6.15 3.88 14.7 3.88 14.7M15.69 30.25s-4.28 2.96-4.28 8.62M22.91 28.953s3.98 4.26 3.98 9.92M15.92 23.836c-.98 2.99 1.79 6.54 5.09 5.47 2.94-.95 3.19-4.22 1.71-6.68-1.83-3.04-5.82-1.79-6.8 1.21"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M16.18 17.247c2.97-3.32 1.4-9.48-3.49-9.98-4.35-.44-6.53 3.66-6 7.68.65 4.97 6.53 5.62 9.5 2.3M23.68 14.722c-1.24 4.28 2.85 9.15 7.48 7.48 4.11-1.49 4.29-6.13 2.08-9.53-2.74-4.2-8.32-2.23-9.56 2.05"
      />
    </svg>
  );
};
export default SvgDependedFamily;
