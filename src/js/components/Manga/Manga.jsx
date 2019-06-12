import React, {Component} from 'react'

class Manga extends Component{

    constructor(props){
        super(props);

        this.state = {
            manga: {
                russianTitle: '',
                englishTitle: '',
                author: '',
                description: '',
                status: '',
                imgFileName: '',
                link: ''
            }
        }
    }

    componentWillMount() {

        fetch('http://localhost:8080/manga/' + this.props.match.params.link, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({manga: res})
            });
    }

    render() {
        return(
            <div className='uk-width-3-4'>
                <div className='uk-card uk-card-default uk-flex'>
                    <div className='uk-width-2-3 uk-padding-small'>
                        <h1>{this.state.manga.russianTitle}</h1>
                        <p>{this.state.manga.englishTitle}</p>
                        <p>Автор: {this.state.manga.author}</p>
                        <p>Статус: {this.state.manga.status === "CAMEOUT" ? "Вышла" : "Выходит"}</p>
                        <h3>Описание</h3>
                        <p>{this.state.manga.description}</p>
                    </div>
                    <div className='uk-width-1-3 uk-padding-small'>
                        <img src={"http://localhost:8080/covers/" + this.state.manga.imgFileName} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Manga;