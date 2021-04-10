import React, { Component } from 'react';
import { fetch } from '../../utils/httpUtils';
import '../../css/styles.scss';

class ContentManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount(){
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`);
        const json = await response.data.items;
        this.setState({ bookList : json, copyBookList : json});
    }

    updateInput = (value) =>{
        const { copyBookList } = this.state;
        const filtered = copyBookList.filter(book => {
            return book.volumeInfo.title.toLowerCase().includes(value.toLowerCase());
        });
        this.setState({ bookList : filtered });
    }

    render() {
        const { bookList } = this.state;
        return (
                <>
                <div className="box">
                    <div className="titleName">Books</div>
                    <div className="buttonbox"><button type="button" className="btn">Create New Book</button></div>
                </div>
                <div className="searchBox">
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Search" onChange={(e) => this.updateInput(e.target.value)}/>
                        <a href="#/"><img alt="" className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
                    </div>
                </div>
                <div className="boxArticle">
                    <div className="secondTitle">All Books</div>
                </div>
                <div className="boxArticle2">
                    {bookList && bookList.map(item => (
                        <div className="card" key={item.id}>
                            <div className="cardTitle">{item.volumeInfo.title}</div>
                            <div className="cardContent">Authors : {item.volumeInfo.authors[0]}</div>
                            <div className="cardContent">Publisher : {item.volumeInfo.publisher}</div>
                            <div className="cardContent">Published Date :{item.volumeInfo.publishedDate}</div>
                        </div>
                    ))}
                </div>
                </>
        );
    }
}
export default ContentManage;
