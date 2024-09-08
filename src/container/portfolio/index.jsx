import React, { useState } from "react";
import "./style.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import imageone from "../../images/image1.jpeg"
import imagetwo from "../../images/image2.jpeg"
import imagethree from "../../images/images 3.jpeg"
import imagefour from "../../images/images 4.jpeg"
import imagefive from "../../images/images 5.jpeg"
import imagesix from "../../images/images 6.jpeg"
const Portfolio = () => {
    const [filteredValue,setFilteredValue]=useState(1);
    const [hoveredValue,setHoveredValue]=useState(null);
    function handleFilter(currentId){
        setFilteredValue(currentId)
    };
    function handleHover(index){
        setHoveredValue(index)

    }
    console.log('************');
    console.log(hoveredValue);
    console.log('********');
   
    const portfolioData = [
        {
            id: 2,
            name: "Calculator",
            image: imageone,
            link:''
        },
        {
            id: 2,
            name: "Notes App",
            image: imagetwo,
            link:''
        },
        {
            id: 2,
            name: "Landing Page",
            image: imagethree,
            link:''
        },
        {
            id: 3,
            name: "E-commerce",
            image: imagefour,
            link:''
        },
        {
            id: 3,
            name: "Management",
            image: imagefive,
            link:''
        },
        {
            id: 3,
            name: "Sharing",
            image: imagesix,
            link:''
        },
    ]
    const filterData = [
        {
            filterId: 1,
            label: 'All'
        },
        {
            filterId: 2,
            label: 'Development'
        },
        {
            filterId: 3,
            label: 'Design'
        }
    ]
    const filteredItems=filteredValue===1?portfolioData:
    portfolioData.filter(item=>item.id===filteredValue)
    console.log(filteredItems);
    
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText='My Portfolio'
                icon={<BsInfoCircleFill size={40} />} />
            <div className="portfolio_content">
                <ul className="portfolio_content_filter">
                    {
                        filterData.map(item=>(
                    <li className={item.filterId===filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                        {
                            item.label
                        }
                    </li>

                    ))
                }
                </ul>
                <div className="portfolio_content_cards">
                    {
                 filteredItems.map((item,index)=>(
                    <div className="portfolio_content_cards_item" key={`cardItem${item.name.trim()}`}
                    onMouseEnter={()=>handleHover(index)}
                    onMouseLeave={()=>handleHover(null)}>
                        <div className="portfolio_content_cards_item_image-wrapper">
                        <a>
                            <img src={item.image} alt="dummy data" />
                        </a>

                        </div>
                        <div className="overlay">

                            {index===hoveredValue &&(
                                <div>
                                <p>
                                {item.name}
                                </p>
                                <button> Visit</button>
                            </div>
                            )}
                           
                        </div>
                    </div>
                  ))  
                }
                    
                </div>

                
            </div>
        </section>
    )
}
export default Portfolio;