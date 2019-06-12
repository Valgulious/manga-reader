import React, {Component} from 'react'
import Item from './Item.jsx'
import Form from './Form.jsx'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mangas: []
        }
    }

    componentWillMount() {

        fetch('http://localhost:8080/manga/getAll')
            .then(res => res.json())
            .then(res => {
                this.setState({mangas: res});
            });

    }

    render() {
        const mangas = this.state.mangas;

        return(
            <div className='uk-width-3-4'>
                <div className='uk-card uk-card-default'>
                    <div className='uk-flex uk-flex-between'>
                        <div className='uk-child-width-1-4@m uk-child-width-1-2@s' id='mangas' uk-grid="">
                            {
                                mangas.map((manga) => (
                                    <Item
                                        rusTitle={manga.russianTitle}
                                        engTitle={manga.englishTitle}
                                        author={manga.author}
                                        desc={manga.description}
                                        status={manga.status}
                                        cover={manga.imgFileName}
                                        link={manga.link}
                                    />
                                ))
                            }
                        </div>

                        <Form/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;