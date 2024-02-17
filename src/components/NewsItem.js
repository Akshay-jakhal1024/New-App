import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{ height: "35rem", margin: "2rem 0" }}>
                    <img src={!imageUrl ? "https://i.imgflip.com/54a8be.jpg" : imageUrl} className="card-img-top" style={{ height: "13rem"}} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5> <hr />
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toLocaleString()}</small></p>
                        <div className="container d-flex justify-content-between align-items-center" style={{position:"absolute" , bottom:"20px", right:"5px"}}>
                        <span className='text-muted fw-bold'>- {source}</span>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-outline-secondary" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
