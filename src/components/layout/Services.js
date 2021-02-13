import website from '../images/website-illustration.png'
import bot from '../images/bot-illustration.png'
import smm from '../images/smm-illustration.png'
import design from '../images/design-illustration.png'
import crm from '../images/crm-illustration.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const Services = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="services" data-aos="zoom-in-up">
            <h2>Xizmatlar</h2>
            <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br/> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <div className="servcies-content">
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={website} alt=""/>
                    <h3>Vebsayt tuzish</h3>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={bot} alt=""/>
                    <h3>Telegram bot</h3>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={smm} alt=""/>
                    <h3>SMM</h3>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={design} alt=""/>
                    <h3>Grafik Dizayn</h3>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="service" data-aos="flip-right" data-aos-duration="1500">
                    <img src={crm} alt=""/>
                    <h3>CRM Tizimlar</h3>
                    <p>Lorem, ipsum.</p>
                </div>
            </div>
            <button className="btn btn-primary btn-service">Buyurtma berish</button>
            <a href="/">Xizmatlar sahifasiga o’tish</a>
        </div>
    )
}

export default Services
