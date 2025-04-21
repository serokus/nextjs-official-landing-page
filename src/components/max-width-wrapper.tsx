import { cn } from '@/lib/utils'

export const MaxWidthWrapper: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={cn('max-w-[1200px] mx-auto w-full max-md:px-4', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
