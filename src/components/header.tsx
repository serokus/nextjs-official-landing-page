'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { MaxWidthWrapper } from './max-width-wrapper'
import { useTranslations } from 'next-intl'
import { useWindowScroll } from 'react-use'
import { useMemo } from 'react'
import { LocaleSwitcher } from './locale-switcher'

const navigationItems = [
  { message: 'Nav.Home', href: '#' },
  { message: 'Nav.Economics', href: '#' },
  { message: 'Nav.Staking', href: '#' },
  { message: 'Nav.Community', href: '#community' },
  { message: 'Nav.About', href: '#' },
  { message: 'Nav.Buy', href: '#' },
] as const
export const Header: React.FC<React.ComponentProps<'header'>> = ({
  className,
  ...props
}) => {
  const { y } = useWindowScroll()
  const isScrolled = useMemo(() => y > 0, [y])
  const t = useTranslations('HomePage')

  return (
    // w-full h-20 z-10 box-border border-b border-b-border data-[scrolled=false]:bg-transparent data-[scrolled=true]:animate-in data-[scrolled=true]:bg-background/85 data-[scrolled=true]:border data-[scrolled=true]:border-zinc-100/20 data-[scrolled=true]:backdrop-blur-3xl data-[scrolled=true]:duration-500 data-[scrolled=true]:slide-in-from-top-10 data-[scrolled=true]:sticky top-0 duration-300 transition-all
    <header
      suppressHydrationWarning
      className={cn(
        'w-full h-[var(--header-height)] z-20 box-border border-b border-b-border fixed top-0 left-0 right-0 bg-background/85',
        className
      )}
      data-scrolled={isScrolled}
      {...props}
    >
      <MaxWidthWrapper className="h-full flex justify-between items-center">
        <Link
          href="#"
          className="bg-[url(/imgs/Logo.png)] bg-no-repeat bg-center bg-contain w-44 max-md:w-36 h-full"
        />
        {/* <div className="md:hidden">
          <Menu />
        </div> */}
        <div className="flex items-center gap-6">
          <nav className="max-md:hidden flex gap-8 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-4 after:w-px after:h-5 after:bg-white/85">
            {navigationItems.map((item, index) => {
              return (
                <Link
                  className="relative text-base text-foreground hover:text-muted-foreground"
                  key={index}
                  href={item.href}
                >
                  {t(item.message)}
                </Link>
              )
            })}
          </nav>
          <LocaleSwitcher></LocaleSwitcher>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
