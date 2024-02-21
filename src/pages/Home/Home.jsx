import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Collapse } from 'antd';
import { ReactComponent as Service1 } from "../../assets/images/service1.svg";
import { ReactComponent as Service2 } from "../../assets/images/service2.svg";
import { ReactComponent as Service3 } from "../../assets/images/service3.svg";
import { ReactComponent as Service4 } from "../../assets/images/service4.svg";
import { ReactComponent as Service5 } from "../../assets/images/service5.svg";
import { ReactComponent as Service6 } from "../../assets/images/service6.svg";
import { ReactComponent as Service7 } from "../../assets/images/service7.svg";
import { ReactComponent as Service8 } from "../../assets/images/service8.svg";
import { ReactComponent as Service9 } from "../../assets/images/service9.svg";
import { ReactComponent as Vission } from "../../assets/svgs/vission.svg";
import { ReactComponent as Mission } from "../../assets/svgs/mission.svg";
import { ReactComponent as Goal } from "../../assets/svgs/goal.svg";
import ReactTyped from "react-typed";
import homeVideo from "../../assets/videos/video-1.mp4";
import ContactForm from "../../components/ContactForm/ContactForm";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

export default function Home() {
    const { t, i18n } = useTranslation();
    let lang = i18n.language;

    const collapeItems = [
        {
            key: '1',
            label: <div className='title-bar'><Vission /><span>{t('home.about.vission')}</span></div>,
            children: <p>{t('home.about.vission-text')}</p>,
        },
        {
            key: '2',
            label: <div className='title-bar'><Mission /><span>{t('home.about.mission')}</span></div>,
            children: <p>{t('home.about.mission-text')}</p>,
        },
        {
            key: '3',
            label: <div className='title-bar'><Goal /><span>{t('home.about.goal')}</span></div>,
            children: <p>{t('home.about.goal-text')}</p>,
        },
    ];

    const swiperItems = [
        {
            title: t('home.services.service-title-1'),
            desc: t('home.services.service-text-1'),
            img: Service1
        },
        {
            title: t('home.services.service-title-2'),
            desc: t('home.services.service-text-2'),
            img: Service2
        },
        {
            title: t('home.services.service-title-3'),
            desc: t('home.services.service-text-3'),
            img: Service3
        },
        {
            title: t('home.services.service-title-4'),
            desc: t('home.services.service-text-4'),
            img: Service4
        },
        {
            title: t('home.services.service-title-5'),
            desc: t('home.services.service-text-5'),
            img: Service5
        },
        {
            title: t('home.services.service-title-6'),
            desc: t('home.services.service-text-6'),
            img: Service6
        },
        {
            title: t('home.services.service-title-7'),
            desc: t('home.services.service-text-7'),
            img: Service7
        },
        {
            title: t('home.services.service-title-8'),
            desc: t('home.services.service-text-8'),
            img: Service8
        },
        {
            title: t('home.services.service-title-9'),
            desc: t('home.services.service-text-9'),
            img: Service9
        },
    ];

    return (
        <div className="home">
            <div className="hero-section">
                <video loop autoPlay muted className="video">
                    <source src={homeVideo} type="video/mp4" />
                </video>
                <div className="hero-content" data-aos="fade-up">
                    <div className="container">
                        <h1>
                            <ReactTyped
                                key={lang}
                                className="typed"
                                strings={[t("home.background.title1"), t("home.background.title2")]}
                                backDelay={5000}
                                typeSpeed={50}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                        <p>{t("home.background.desc")}</p>
                        <div className="start-btn">
                            <button className="cta" onClick={() => window.scroll({ top: 600, behavior: "smooth" })}>
                                {t("home.background.btn")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="services-section">
                    <div className="services-info">
                        <h2 className="title">{t("home.services.title")}</h2>
                        <p className="desc">{t("home.services.desc")}</p>
                        <a href="#contact" className="main-btn" >
                            {t("home.services.btn")}
                        </a>
                    </div>
                    <div className='services-swiper'>
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            freeMode={false}
                            slidesPerView="auto"
                            spaceBetween={30}
                            pagination={{ clickable: true }}

                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 10, },
                                768: { slidesPerView: 2, spaceBetween: 20, },
                                1024: { slidesPerView: 2, spaceBetween: 30, },
                            }}
                        >
                            {swiperItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="services-card">
                                        <div className="services-img">
                                            <item.img />
                                        </div>
                                        <div className="services-content">
                                            <h4>{t(item.title)}</h4>
                                            <p>{t(item.desc)}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="about-bg" data-aos="fade-up">
                <div className="container">
                    <div className="about-section">
                        <div className='about-collapse'>
                            <Collapse
                                accordion
                                items={collapeItems}
                                defaultActiveKey={['1']}
                                expandIconPosition='end'
                            />
                        </div>
                        <div className="about-info">
                            <h2 className="title white-text">{t("home.about.title")}</h2>
                            <p className="desc white-text">{t("home.about.desc")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
        </div>
    );
}
