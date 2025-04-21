import Image from 'next/image'
import { Heading } from './heading'
import { MaxWidthWrapper } from './max-width-wrapper'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const ThinkDifferent: React.FC = () => {
  const t = useTranslations('HomePage.Sections.ThinkDifferent')
  return (
    <section id="community" className="my-14">
      <MaxWidthWrapper>
        <div className="w-full h-full min-h-[400px] flex items-center flex-col py-16 relative rounded-3xl overflow-hidden bg-[url(/imgs/Section4.png)] bg-cover bg-center bg-no-repeat)]">
          <div className="flex flex-col items-center gap-y-3">
            <Heading className="text-4xl font-semibold">
              {t('heading1')}
            </Heading>
            <Heading className="text-7xl">{t('heading2')}</Heading>
          </div>
          <div className="flex flex-col gap-y-4 mt-24">
            <p className="text-lg text-foreground">{t('text1')}</p>
            <div className="flex justify-center gap-x-8">
              <Link href="#">
                <Image
                  src="/icons/Twitter.png"
                  width={62}
                  height={62}
                  draggable={false}
                  alt="Twitter"
                  title="Twitter"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/Telegram.png"
                  width={62}
                  height={62}
                  draggable={false}
                  alt="Twitter"
                  title="Twitter"
                />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
