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

        fetch('http://localhost:8080/manga/getByLink?link=' + this.props.match.params.link, {
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
            <h1>
                {this.state.manga.russianTitle}
            </h1>
        )
    }

}

export default Manga;