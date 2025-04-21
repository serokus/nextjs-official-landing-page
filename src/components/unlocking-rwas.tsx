import { useTranslations } from 'next-intl'
import { Heading } from './heading'
import { MaxWidthWrapper } from './max-width-wrapper'
import Image from 'next/image'

export const UnlockingRWAs: React.FC = () => {
  const t = useTranslations('HomePage.Sections.Section3')
  return (
    <section className="mt-16">
      <MaxWidthWrapper>
        <div className="bg-muted/50 rounded-3xl py-16 max-md:pt-12">
          <Heading className="text-center">{t('heading')}</Heading>
          <div className="flex flex-col mt-12 max-md:space-y-4">
            <div className="flex flex-col ps-32 max-md:ps-0">
              <div className="flex max-md:flex-col-reverse items-center">
                <div className="grow shrink">
                  <Heading className="max-md:text-center text-4xl">
                    {t('Section1.title')}
                  </Heading>
                  <p className="text-lg max-md:px-3 max-md:text-pretty max-md:text-center font-inter text-[#9CA3AF] mt-3 max-w-lg">
                    {t('Section1.description')}
                  </p>
                </div>
                <div className="md:w-[541px] md:h-[307px]">
                  <Image
                    draggable={false}
                    priority
                    width={541}
                    height={307}
                    src="/imgs/Section-301.png"
                    className="w-full h-full"
                    alt="Section-301"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-20">
              <div className="flex max-md:flex-col items-center">
                <div className="md:w-[541px] md:h-[307px]">
                  <Image
                    draggable={false}
                    priority
                    width={541}
                    height={307}
                    src="/imgs/Section-302.png"
                    className="w-full h-full"
                    alt="Section-301"
                  />
                </div>
                <div className="grow shrink">
                  <Heading className="text-4xl max-md:text-center">
                    {t('Section2.title')}
                  </Heading>
                  <p className="text-lg max-md:px-3 max-md:text-pretty max-md:text-center font-inter text-[#9CA3AF] mt-3 max-w-lg">
                    {t('Section2.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
