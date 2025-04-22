import { useTranslations } from 'next-intl'
import { Heading } from './heading'
import { MaxWidthWrapper } from './max-width-wrapper'
import Image from 'next/image'

export const SecureEfficientDesignedScale: React.FC = () => {
  const t = useTranslations('HomePage.Sections.Section1')
  return (
    <section id="staking">
      <MaxWidthWrapper>
        <div className="bg-muted/50 pt-16 max-md:pt-12 pb-20 rounded-3xl">
          <Heading className="text-center">{t('heading')}</Heading>
          <div className="flex justify-between px-8 max-md:flex-col max-md:items-center mt-20">
            <div className="md:w-[555px] md:h-[312px]">
              <Image
                draggable={false}
                priority
                width={555}
                height={312}
                src="/imgs/Section2.png"
                className="w-full h-full"
                alt="Section2.png"
              />
            </div>
            <ol className="grid grid-cols-1 space-y-2.5 max-md:mt-8">
              {['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].map(
                (text, index) => {
                  return (
                    <li
                      className="text-2xl max-md:text-base font-inter text-foreground font-normal"
                      key={index}
                    >
                      {t(`items.${text}`)}
                    </li>
                  )
                }
              )}
            </ol>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
