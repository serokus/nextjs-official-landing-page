import { useTranslations } from 'next-intl'
import { MaxWidthWrapper } from './max-width-wrapper'
import Link from 'next/link'
import Image from 'next/image'

const renderLinks = [
  {
    title: 'dt1',
    children: [
      {
        title: 'dd1.text1',
        link: '#',
      },
      {
        title: 'dd1.text2',
        link: '#',
      },
      {
        title: 'dd1.text3',
        link: '#',
      },
      {
        title: 'dd1.text4',
        link: '#',
      },
    ],
  },
  {
    title: 'dt2',
    children: [
      {
        title: 'dd2.text1',
        link: '#',
      },
      {
        title: 'dd2.text2',
        link: '#',
      },
      {
        title: 'dd2.text3',
        link: '#',
      },
    ],
  },
  {
    title: 'dt3',
    children: [
      {
        title: 'dd3.text1',
        link: '#',
      },
      {
        title: 'dd3.text2',
        link: '#',
      },
    ],
  },
  {
    title: 'dt4',
    children: [
      {
        title: 'dd4.text1',
        link: '#',
      },
    ],
  },
] as const
export const Footer: React.FC = () => {
  const t = useTranslations('HomePage.Footer')
  return (
    <footer className="w-full py-12 bg-background border-t border-t-[#3CD8FD] box-border">
      <MaxWidthWrapper className="flex flex-col">
        <div className="grid grid-cols-4 justify-items-center max-md:text-center max-md:grid-cols-2 max-md:gap-y-5 [&>dl]:space-y-3.5 [&>dl]:[&>dt]:mb-5">
          {renderLinks.map((parent, index) => {
            return (
              <dl key={index}>
                <dt className="text-[#3CD8FD] font-bold text-2xl">
                  {t(`Section1.${parent.title}`)}
                </dt>
                {parent.children &&
                  parent.children.map((child, index) => {
                    return (
                      <dd key={index}>
                        <Link
                          href={child.link}
                          target="_blank"
                          className="text-muted-foreground text-sm hover:underline hover:text-[#3CD8FD]"
                        >
                          {t(`Section1.${child.title}`)}
                        </Link>
                      </dd>
                    )
                  })}
              </dl>
            )
          })}
        </div>
        <div className="border [border-image:linear-gradient(117deg,_rgba(200,_200,_200,_0),_rgba(151,_151,_151,_1),_rgba(200,_200,_200,_0))_1_1] mb-6 mt-12" />
        <div className="flex justify-between items-baseline-last max-md:items-center max-md:flex-col">
          <div className="flex flex-col gap-4">
            <div className="w-48 h-12 max-md:mx-auto">
              <Image
                src="/imgs/Logo.png"
                alt="Logo"
                width={200}
                height={42}
                priority
                draggable={false}
                className="w-full h-full"
              />
            </div>

            <p className="max-w-2xl text-muted-foreground text-base max-md:text-sm">
              {t('Section2.left')}
            </p>
          </div>
          <span className="text-muted-foreground text-base max-md:text-sm max-md:mt-10">
            {t('Section2.right')}
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
