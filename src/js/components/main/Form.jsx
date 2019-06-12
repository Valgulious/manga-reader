import React, {Component} from 'react'

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            standByRusTitle: false,
            standByEngTitle: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        console.log(e.target.id);

        if (e.target.id === 'rt') {

            fetch('http://localhost:8080/manga/standByRussianTitle?russianTitle=' + e.target.value)
                .then(res => res.json())
                .then(res => {
                    this.setState({standByRusTitle: res})
                })
        } else {
            fetch('http://localhost:8080/manga/standByEnglishTitle?englishTitle=' + e.target.value)
                .then(res => res.json())
                .then(res => {
                    this.setState({standByEngTitle: res})
                })
        }

    }

    handleSubmit(e) {

        e.preventDefault();

       if (!this.state.standByRusTitle && !this.state.standByEngTitle) {

           let formData = new FormData();

           const rt = document.getElementById('rt');
           const et = document.getElementById('et');
           const at = document.getElementById('at');
           const desc = document.getElementById('desc');
           const st = document.getElementById('st');
           const file = document.getElementById('file');

           formData.append(rt.name, rt.value);
           formData.append(et.name, et.value);
           formData.append(at.name, at.value);
           formData.append(desc.name, desc.value);
           formData.append(st.name, st.value);
           formData.append(file.name, file.files[0]);

           fetch('http://localhost:8080/manga/create', {
               method: 'post',
               body: formData
           });
       } else {
           alert("Манга с таким название уже существует");
       }
    }

    render() {
        return(
            <div>
                <a className='uk-position-fixed uk-padding-small' uk-icon="icon: plus-circle; ratio: 1.5" uk-toggle="target: #mangaForm"
                   title='Добавить мангу'></a>

                <div id="mangaForm" className='uk-modal-container' uk-modal="">

                   <div className='uk-modal-dialog uk-modal-body'>

                       <button className="uk-modal-close-default" type="button" uk-close=""></button>

                       <form onSubmit={this.handleSubmit}>

                           <fieldset className='uk-fieldset'>

                               <legend className="uk-legend">Добавление манги</legend>

                               <div className="uk-margin">
                                   <input id='rt' className="uk-input" type="text" name='russianTitle'
                                          placeholder="Русское название манги" onChange={this.handleChange} required/>
                               </div>

                               <div className="uk-margin">
                                   <input id='et' className="uk-input" type="text" name='englishTitle'
                                          placeholder="Английское название манги" onChange={this.handleChange} required/>
                               </div>

                               <div className="uk-margin">
                                   <input id='at' className="uk-input" type="text" name='author'
                                          placeholder="Автор манги" required/>
                               </div>

                               <div className="uk-margin">
                                   <textarea id='desc' className="uk-textarea" name='description' rows="5"
                                             placeholder="Описание" required></textarea>
                               </div>

                               <div className="uk-margin">
                                   <select id='st' className="uk-select" name='status'>
                                       <option value='cameout'>Вышла</option>
                                       <option value='comingout'>Выходит</option>
                                   </select>
                               </div>

                               <div className="uk-margin">
                                   <div uk-form-custom="">
                                       <input id='file' type="file" name='file' required/>
                                       <button className="uk-button uk-button-primary" type="button" tabIndex="-1">
                                           Выбрать обложку
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
            </div>
        );
    }

};

export default Form;