import React,{useState} from 'react'
import ServiceApi from '../API/ServiceApi'


const Services = () => {
    const[serviceData] = useState(ServiceApi);
    return (
        <>
        <section className="service-main-container">
            <div className="container service-container">
                <h1 className="main-heading text-center fw-bold">Our Services</h1>
                <div className="row">
                    {serviceData.map((curElem)=>{
                        const{logo,title,info} = curElem;
                        return(
                            <>
                            <div className="col-11 col-lg-4 col-xxl-4 service-container-subdiv">
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h2 className="sub-heading">{title}</h2>
                        <p className="main-hero-para">{info}</p>

                    </div>

                            </>
                        )
                    })}
                    
                    
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
