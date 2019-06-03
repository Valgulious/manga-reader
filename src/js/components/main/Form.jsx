import React, {Component} from 'react'

class Form extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();

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
    }

    render() {
        return(
            <div>
                <a className='uk-position-fixed uk-padding-small' uk-icon="icon: plus-circle; ratio: 1.5" uk-toggle="target: #form"
                   title='Добавить мангу'></a>

                <div id="form" className='uk-modal-container' uk-modal="">

                   <div className='uk-modal-dialog uk-modal-body'>

                       <form onSubmit={this.handleSubmit}>

                           <fieldset className='uk-fieldset'>

                               <legend className="uk-legend">Добавление манги</legend>

                               <div className="uk-margin">
                                   <input id='rt' className="uk-input" type="text" name='russianTitle' placeholder="Русское название манги" />
                               </div>

                               <div className="uk-margin">
                                   <input id='et' className="uk-input" type="text" name='englishTitle' placeholder="Английское название манги" />
                               </div>

                               <div className="uk-margin">
                                   <input id='at' className="uk-input" type="text" name='author' placeholder="Автор манги" />
                               </div>

                               <div className="uk-margin">
                                   <textarea id='desc' className="uk-textarea" name='description' rows="5" placeholder="Описание"></textarea>
                               </div>

                               <div className="uk-margin">
                                   <select id='st' className="uk-select" name='status'>
                                       <option value='cameout'>Завершено</option>
                                       <option value='comingout'>Переводится</option>
                                   </select>
                               </div>

                               <div className="uk-margin">
                                   <div uk-form-custom="">
                                       <input id='file' type="file" name='file'/>
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