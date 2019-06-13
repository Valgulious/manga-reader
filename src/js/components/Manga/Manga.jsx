import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Form from './Form.jsx'

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
            },
            volumes: [],
            isToggle: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        if (!this.state.isToggle) {
            fetch('http://localhost:8080/volumes/' + this.props.match.params.link + '?order=up' )
                .then(res => res.json())
                .then(res => {
                    this.setState({volumes: res});
                });
            this.setState((state) => ({isToggle: !state.isToggle}));
        } else this.setState((state) => ({isToggle: !state.isToggle}));

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

        let volumes = this.state.volumes;

        return(
            <div className='uk-width-3-4'>
                <div className='uk-card uk-card-default'>
                   <div className='uk-flex'>
                       <div className='uk-width-2-3 uk-padding-small'>
                           <h1>{this.state.manga.russianTitle}</h1>
                           <p>{this.state.manga.englishTitle}</p>
                           <p>Автор: {this.state.manga.author}</p>
                           <p>Статус: {this.state.manga.status === "CAMEOUT" ? "Вышла" : "Выходит"}</p>
                           <h3>Описание</h3>
                           <p>{this.state.manga.description}</p>
                       </div>
                       <div className='uk-width-1-3 uk-padding-small'>
                           <img src={"http://localhost:8080/img/covers/" + this.state.manga.imgFileName} alt=""/>
                           <button className="uk-button uk-button-primary uk-align-center uk-margin-small" type="button"
                                   uk-toggle="target: #volForm">Добавить главу
                           </button>
                           <Form mangaLink={this.state.manga.link}/>
                       </div>
                   </div>
                    <div className='uk-padding-small'>
                        <div onClick={this.handleClick}>
                            <button className="uk-button uk-button-primary" type="button"
                                    uk-toggle="target: .toggle">Список глав
                            </button>
                        </div>
                        <span className="toggle"></span>
                        <div className="toggle uk-flex uk-flex-wrap"  hidden>
                            {volumes.map(vol => (
                                <div className='uk-padding-small'>
                                    <Link to={`/${vol.mangaLink}/${vol.number}`}>
                                        {"Глава " + vol.number}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Manga;