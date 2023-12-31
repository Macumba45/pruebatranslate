'use client'

import { FC, memo, useEffect } from 'react'
import ButtonComp from '../Button'
import VideoPlayer from '../VideoPlayer'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import React from 'react'
import {
    ButtonContainer,
    MainContainer,
    SpanBold,
    SubtitleContainer,
    SubtitleHeader,
    TitleContainer,
    TitleHeader,
    VideoContainer,
} from './style'
import LocaleSwitcher from '@/components/LocaleSwitcher'


const HeaderComp: FC = () => {
    const t = useTranslations('Index');
    const [language, setLanguage] = React.useState('es');
    const getLangMobile = () => {
        if (typeof window !== 'undefined') {
            if (window.navigator.language.startsWith('es')) {
                setLanguage('es');
            } else {
                setLanguage('en');
            }
        }
    }

    console.log(useTranslations('Index'))
    console.log(t('HomeHeaderTitle'))

    useEffect(() => {
        const handleScroll = (event: Event) => {
            event.preventDefault()
        }

        // Bloquear el desplazamiento cuando se monta el componente
        document.body.style.overflow = 'hidden'
        document.addEventListener('scroll', handleScroll, { passive: false })

        return () => {
            // Permitir el desplazamiento cuando se desmonta el componente
            document.body.style.overflow = ''
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <MainContainer>
            <TitleContainer>
                <TitleHeader>{t('HomeHeaderTitle')}</TitleHeader>
            </TitleContainer>
            <SubtitleContainer>
                <SubtitleHeader>
                    {t('homeSubHeaderTitle')}
                    <br /> <SpanBold>{t('homeSubHeaderTitle2')}</SpanBold>
                </SubtitleHeader>
            </SubtitleContainer>
            <ButtonContainer>
                <Link style={{ textDecoration: 'none' }} href="/auth/login">
                    <ButtonComp
                        color="#00a5f2"
                        bgColor="white"
                        variant="contained"
                        title={t('login')}
                    />
                </Link>
                <Link style={{ textDecoration: 'none' }} href="/auth/signup">
                    <ButtonComp
                        color="#00a5f2"
                        bgColor="white"
                        variant="contained"
                        title={t('register')}
                    />
                </Link>
                {/* <Link style={{ textDecoration: 'none' }} href="/maps">
                    <ContinueWithGoogleButton

                    />
                </Link> */}
                <Link style={{ textDecoration: 'none' }} href={`${language + '/maps'}`}>
                    <ButtonComp
                        color="white"
                        variant="outlined"
                        bgColor="transparent"
                        border="1px solid white"
                        title={t('guest')}
                    />
                </Link>
            </ButtonContainer>
            <VideoContainer>
                <VideoPlayer url={'https://res.cloudinary.com/dinasxwdf/video/upload/v1693586993/backgroundVideo_tgdz7p.mp4'} />
            </VideoContainer>
            <LocaleSwitcher />

        </MainContainer>
    )
}

export default memo(HeaderComp)
