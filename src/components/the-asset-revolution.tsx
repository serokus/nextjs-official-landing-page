import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading } from './heading'
import { MaxWidthWrapper } from './max-width-wrapper'

export const TheAssetRevolution: React.FC = () => {
  const t = useTranslations('HomePage.Sections.Section2')
  return (
    <section id="economics" className="my-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 [&>div]:md:min-h-[393px]">
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item1.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item1.description')}
              </p>
            </div>
            <Image
              draggable={false}
              priority
              width={280}
              height={392}
              src={'/imgs/Section-101.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-3xl w-full col-span-2 max-md:order-first max-md:min-h-48 flex justify-center items-center relative">
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-102.svg'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl max-md:scale-y-150 scale-x-150 blur-xl"
              alt=""
            />
            <Heading className="text-6xl max-md:text-4xl max-md:px-8 font-black text-center">
              {t('item2.title')}
            </Heading>
          </div>
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4 pt-28">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item3.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item3.description')}
              </p>
            </div>
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-103.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4 pt-40">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item4.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item4.description')}
              </p>
            </div>
            {/* <img
              draggable="false"
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              src="/imgs/Section-104.png"
              alt="Section-104"
            /> */}
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-104.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item5.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item5.description')}
              </p>
            </div>
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-105.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item6.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item6.description')}
              </p>
            </div>
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-106.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-y-4 pt-16">
              <Heading className="text-2xl max-md:text-2xl">
                {t('item7.title')}
              </Heading>
              <p className="text-base text-foreground/85 max-md:hidden">
                {t('item7.description')}
              </p>
            </div>
            <Image
              draggable={false}
              priority
              width={601}
              height={392}
              src={'/imgs/Section-107.png'}
              className="absolute inset-0 -z-[1] object-cover rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
