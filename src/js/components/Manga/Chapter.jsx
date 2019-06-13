import React, {Component} from 'react'

class Chapter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            chapter: {
                mangaLink: "",
                number: 0,
                images: []
            },
            page: 0
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrev = this.handleClickPrev.bind(this);

    }

    handleClickNext() {

        if (this.state.page < this.state.chapter.images.length-1) {
            this.setState((state) => ({page: ++state.page}));
        } else {
            console.log(this.state.page + ',' + this.state.chapter.images.length);
            let nextNumber = this.state.chapter.number + 1;
            // window.location.pathname = '/' + `${this.props.match.params.link}` + '/' + `${nextNumber}`
            window.location.pathname = this.state.chapter.mangaLink + '/' + nextNumber;
        }
        console.log(this.state.page)

    }

    handleClickPrev() {

        if (this.state.page > 0) {
            this.setState((state) => ({page: ++state.page}));
            console.log(this.state.page)
        } else {
            console.log(this.state.page + ',' + this.state.chapter.images.length);
            let prevNumber = this.state.chapter.number - 1;
            if (prevNumber > 0) {
                window.location.pathname = '/' + this.state.chapter.mangaLink + '/' + prevNumber;
            } else window.location.pathname = '/' + this.state.chapter.mangaLink
            // window.location.pathname = '/' + `${this.props.match.params.link}` + '/' + `${nextNumber}`

        }

    }

    componentWillMount() {

        fetch('http://localhost:8080/volumes/' + this.props.match.params.link + '/' + this.props.match.params.chapter)
            .then(res => res.json())
            .then(res => {
                if (res.mangaLink) {
                    this.setState({chapter: res});
                } else window.location.pathname = '/' + `${this.props.match.params.link}`;
            })

    }

    render() {
        return(
            <div className='uk-card uk-card-default'>
                <div className='uk-flex'>
                    <h1 className='uk-card-title uk-padding-small'>Глава {this.state.chapter.number}</h1>
                    <span className='uk-margin-small pgt10'>Страница: {this.state.page + 1}</span>
                    <span className='uk-link uk-margin-small pgt8' onClick={this.handleClickPrev}
                          uk-icon="icon: arrow-left; ratio: 1.5"></span>
                    <span className='uk-link uk-margin-small pgt8' onClick={this.handleClickNext}
                          uk-icon="icon: arrow-right; ratio: 1.5"></span>
                </div>
                <img src={'http://localhost:8080/img/' + this.state.chapter.mangaLink + '/' + this.state.chapter.number +
                    '/' + this.state.chapter.images[this.state.page]} alt="" onClick={this.handleClickNext}/>
            </div>
        );
    }


}

export default Chapter;