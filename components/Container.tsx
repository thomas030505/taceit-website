/** The page's one content width, shared by every section. */
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-16 ${className}`}>{children}</div>;
}
