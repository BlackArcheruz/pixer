import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react';

const Showcase = () => {
    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    
    return (
        <div className="showcase" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500">
            <div className="col-md-3">
            <h1>Biznesingizni keyingi bosqichga <br/>
                olib chiqing</h1>
                <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. <br/> Nam facilisis lacinia ex, eget sollicitudin massa pellentesque <br/> in. Vivamus mattis eros at sem pulvinar</p>
                <button className="btn btn-primary btn-showcase">Xizmatlar bilan tanishish</button>
            </div>
            <div className="col-md-3">
            <iframe width="458" height="258" src="https://www.youtube.com/embed/6_pru8U2RmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Showcase
