'use client'
import { useTranslations } from 'next-intl'
import { MaxWidthWrapper } from './max-width-wrapper'
import { Heading } from './heading'
import Image from 'next/image'

export const DiscoverNexus: React.FC = () => {
  const t = useTranslations('HomePage.Sections.DiscoverNexus')
  return (
    <section id="about" className="mb-16">
      <MaxWidthWrapper>
        <div className="bg-muted/50 rounded-3xl overflow-hidden py-16 max-md:pt-12 px-24 max-md:px-4">
          <Heading className="text-center">{t('heading')}</Heading>
          <div className="mt-12 grid max-md:grid-cols-1 grid-cols-3 max-md:space-y-3.5 px-20">
            {[
              {
                imgPath: '/imgs/Section-501.png',
                title: 'item1',
              },
              {
                imgPath: '/imgs/Section-502.png',
                title: 'item2',
              },
              {
                imgPath: '/imgs/Section-503.png',
                title: 'item3',
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 items-center justify-center"
                >
                  <div className="w-[60px] h-[60px]">
                    <Image
                      priority
                      width={60}
                      height={60}
                      className="w-full h-full"
                      src={item.imgPath}
                      alt=""
                    />
                  </div>
                  <p className="font-inter text-foreground/85 text-2xl max-md:text-base">
                    {t(`items.${item.title}`)}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="w-full relative overflow-hidden">
            <video
              onContextMenu={(ev) => {
                ev.stopPropagation()
                ev.preventDefault()
              }}
              className="rounded-3xl shadow-xl mt-8 max-md:mt-12"
              playsInline
              src="/introduce.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
