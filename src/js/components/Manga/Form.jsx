import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            standByNumber: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        console.log(e.target.id);

        fetch('http://localhost:8080/volumes/standByNumber?mangaLink=' + this.props.mangaLink +
            '&number=' + e.target.value)
            .then(res => res.json())
            .then(res => {
                this.setState({standByNumber: res})
            })
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.standByNumber) {

            let formData = new FormData();

            const vn = document.getElementById('volNumber');
            const file = document.getElementById('zipFile');

            formData.append('mangaLink', this.props.mangaLink);
            formData.append(vn.name, vn.value);
            formData.append(file.name, file.files[0]);

            vn.value = '';
            console.log(file.files[0].type);

            fetch('http://localhost:8080/volumes/create', {
                method: 'post',
                body: formData
            });
        } else {
            alert("Глава с таким номером уже существует");
        }
    }

    render() {
        return (
            <div id="volForm" className='uk-modal-container' uk-modal="">

                <div className='uk-modal-dialog uk-modal-body'>

                    <button className="uk-modal-close-default" type="button" uk-close=""></button>

                    <form onSubmit={this.handleSubmit}>

                        <fieldset className='uk-fieldset'>

                            <legend className="uk-legend">Добавление Главы</legend>

                            <div className="uk-margin">
                                <input id='volNumber' className="uk-input" type="number" name='number'
                                       placeholder="Номер главы" onChange={this.handleChange} required/>
                            </div>

                            <div className="uk-margin">
                                <div uk-form-custom="">
                                    <input id='zipFile' type="file" name='file' required/>
                                    <button className="uk-button uk-button-primary" type="button" tabIndex="-1">
                                        Выбрать архив
                                    </button>
                                </div>
                            </div>

                            <div className="uk-margin" uk-margin="">
                                <input className='uk-button uk-button-primary uk-align-center' type="submit" value='Добавить'/>
                            </div>

                        </fieldset>

                    </form>

                </div>

            </div>

        );
    }

}

export default Form;