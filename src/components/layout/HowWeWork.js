import step from '../images/step-illustration.svg'
import problem from '../images/problem-illustration.svg'
import project from '../images/project-illustration.svg'
import success from '../images/success-illustration.svg'
import support from '../images/support-illustration.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const HowWeWork = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="h-w-k" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h2>Biz qanday ishlaymiz?</h2>
            <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br/> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <div className="container">
            <div className="how-we-work">   
            <img src={step} alt=""className="left-img"/>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Talablarni aniqlab chiqamiz</span><br/>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.<br/> Nam facilisis</p>
            </div>
            <div className="media flipped"> 
            <div className="image"><img src={problem} alt="" className="right-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Bir necha yechimlarni taklif qilamiz</span><br/>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.<br/> Nam facilisis</p>
            </div>
            </div>
            <img src={project} alt="" className="left-img"/>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Loyiha uchun vaqt belgilaymiz</span><br/>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.<br/> Nam facilisis</p>
            </div>
            <div className="media flipped"> 
            <div className="image"><img src={success} alt="" className="right-img"/></div>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>A’lo sifat bilan bajarib topshiramiz</span><br/>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.<br/> Nam facilisis</p>
            </div>
            </div>
            <img src={support} alt="" className="left-img"/>
            <div className="col-md-2">
                <p><span style={{fontWeight: 'bold'}}>Qo’llab-quvvatlab boramiz</span><br/>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.<br/> Nam facilisis</p>
            </div>
            </div>
            </div>
            <button className="btn btn-primary" style={{margin: '2rem 0 0.4rem 0',fontWeight: 'bold'}}>Buyurtma Berish</button>
        </div>
    )
}

export default HowWeWork
