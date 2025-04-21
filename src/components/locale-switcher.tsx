import { ComponentProps, useCallback, useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const LocaleSwitcher: React.FC<ComponentProps<'div'>> = ({
  className,
  ...props
}) => {
  const locale = useLocale()
  const t = useTranslations('HomePage.Locale')
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransaction] = useTransition()

  const onSelectChange = (locale: string) => {
    startTransaction(() => {
      router.replace({ pathname, ...params }, { locale })
    })
  }

  const renderLocale = useCallback(() => {
    const _locale = locale && locale.toLocaleUpperCase() === 'EN' ? 'EN' : 'CN'
    return (
      <>
        <Image
          width={24}
          height={24}
          className="object-cover align-middle"
          src={`/icons/${_locale === 'EN' ? 'English' : 'Chinese'}.svg`}
          alt=""
        />
        <span className="text-base">{_locale}</span>
      </>
    )
  }, [locale])

  return (
    <div className={cn('ml-3.5', className)} {...props}>
      <Select disabled={isPending} onValueChange={onSelectChange}>
        <SelectTrigger className="border-none">{renderLocale()}</SelectTrigger>
        <SelectContent>
          {routing.locales.map((cur, index) => {
            return (
              <SelectItem
                className="text-base"
                key={index}
                value={cur}
                disabled={locale === cur}
              >
                <Image
                  width={24}
                  height={24}
                  className="object-cover align-middle"
                  src={`/icons/${cur === 'en' ? 'English' : 'Chinese'}.svg`}
                  alt=""
                />
                {t(cur)}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
