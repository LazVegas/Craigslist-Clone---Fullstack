import React from 'react'
import { Link } from 'react-router-dom'
import { useCats } from  '../hooks'

export default props => {
    const categories = useCats()
    return (
        <div className="mainContainer">
          <div className="cityName">las vegas</div>
            <div className="catContainer">
                {categories.map(cat => (
                    <div className="main">
                        <Link to={"/" + cat.slug}><h2 className="parents">{cat.name}</h2></Link>
                        <div className="links">
                            {cat.children.map(sub => (
                                <Link to={"/" + sub.slug}>{sub.name}</Link>
                            ))}                  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}