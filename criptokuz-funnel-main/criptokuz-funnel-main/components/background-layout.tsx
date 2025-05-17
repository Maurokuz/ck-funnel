import { cn } from "@/lib/utils"

const BackgroundLayout = ({ children, className }: {
  children: React.ReactNode,
  className?: string
}) => {
  return (
    <div
      className={cn("border-b border-[#2d2d2d] bg-[#111] relative before:z-0 before:opacity-70 before:absolute before:inset-0 before:bg-hero-pattern flex items-center flex-col min-h-fit sm:min-h-screen", className)}
      style={{
        backgroundImage: `url('/background.webp')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  )
}

export default BackgroundLayout