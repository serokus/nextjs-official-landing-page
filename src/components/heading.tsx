import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const Heading: React.FC<ComponentProps<'h2'>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h2
      className={cn(
        'font-inter font-bold leading-none tracking-tight text-5xl max-md:text-3xl text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
