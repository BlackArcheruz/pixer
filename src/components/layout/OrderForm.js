import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const OrderForm = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])

    return (
        <div className="order-form">
            <div className="order-container o-f" data-aos="fade-down">
            <h2>Buyurtma berish</h2>
            <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            <form>
                <input type="text" className="name" placeholder="Ismingiz" required/>
                <input type="tel" className="name" placeholder="Telefon Raqam" required/>
                <select className="name select">
                    <option value="xizmat" disabled>Xizmat turi</option>
                    <option value="xizmat">Xizmat turi</option>
                    <option value="Vebsayt">Vebsayt</option>
                    <option value="bot">Telegram bot</option>
                    <option value="dizayn">Grafik dizayn</option>
                    <option value="smm">SMM</option>
                    <option value="crm">CRM</option>
                </select>
                <input type="submit" value="Buyurtma berish" className="btn btn-primary btn-form"/>
            </form>
            </div>
        </div>
    )
}

export default OrderForm
