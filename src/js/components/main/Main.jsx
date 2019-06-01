import React, {Component} from 'react'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mangas: []
        }
    }

    componentWillMount() {
        // $.ajax({
        //     type: 'GET',
        //     url: 'localhost:8080/getAll',
        //     dataType: 'json',
        //     success: (result) => {
        //         this.setState({mangas: result});
        //         console.log(result)
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         alert(jqXHR.status + ' ' + jqXHR.responseText);
        //     }
        // })

        fetch('http://localhost:8080/getAll')
            .then(res => res.json())
            .then(res => {
                console.log(res)
            });

        // fetch('http://localhost:8080/getAll')
        //     .then(function (response) {
        //         console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
        //         console.log((response.status));
        //         return response.json();
        //     })
        //     .then(function (result) {
        //         console.log(result);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }

    render() {
        return(
            <div className='uk-width-3-4'>
                <div className='uk-card uk-card-default'>
                    <h1>Mangas</h1>
                </div>
            </div>
        );
    }

}

export default Main;