'use client'
import { useTranslations } from 'next-intl'
import { MaxWidthWrapper } from './max-width-wrapper'
import { Button } from './ui/button'
import Image from 'next/image'

export const Hero = () => {
  const t = useTranslations('HomePage')
  return (
    <section className="w-wull relative pt-48 pb-40 max-md:pb-0">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-base max-md:text-xs text-transparent font-semibold leading-none bg-clip-text bg-gradient-to-r from-[#28AFDD] to-[#62ECE2] mb-2.5">
              {t('Hero.text1')}
            </p>
            <h1 className="font-black font-inter text-5xl text-foreground">
              {t('Hero.text2')}
            </h1>
            <p className="max-w-xl mt-5 text-xl max-md:text-base text-left text-foreground/85">
              {t('Hero.text3')}
            </p>
            <div className="flex gap-5 max-md:flex-col mt-16">
              <Button className="text-base h-12 px-10 cursor-pointer font-semibold rounded-2xl bg-gradient-to-r from-[#0A4190] to-[#0490D5] text-foreground">
                {t('Buttons.btn1')}
              </Button>
              <Button className="text-base h-12 px-10 cursor-pointer font-semibold rounded-2xl bg-transparent border-2 border-[#0490D5] hover:bg-transparent text-[#0490D5]">
                {t('Buttons.btn2')}
              </Button>
            </div>
          </div>
          <Image
            className="max-md:hidden"
            onContextMenu={(ev) => {
              ev.preventDefault()
              ev.stopPropagation()
            }}
            priority
            draggable="false"
            src="/imgs/Ant.png"
            width={435}
            height={401}
            alt="Ant"
          />
        </div>
      </MaxWidthWrapper>
      <div className="absolute inset-0 bg-[url(/imgs/Hero.png)] bg-no-repeat bg-center -z-10"></div>
    </section>
  )
}
