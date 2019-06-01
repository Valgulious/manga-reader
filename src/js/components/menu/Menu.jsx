import React from 'react'
import {Link} from "react-router-dom";

const Menu = () => {
    return(
        <div className='uk-width-1-4 uk-margin-small-right'>
            <div className="uk-card uk-card-default uk-card-body">
                <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="">
                    <li className="">
                        <Link to='/'><span className="uk-margin-small-right" uk-icon="icon: home"></span> Главная</Link>
                    </li>
                    <li className="uk-parent">
                        <Link to='/lists'><span className="uk-margin-small-right" uk-icon="icon: list"></span> Списки</Link>
                        <ul className="uk-nav-sub">
                            <li><Link to='/lists/scheduled'>Запланировано</Link></li>
                            <li><Link to='/lists/read'>Читаю</Link></li>
                            <li><Link to='/lists/readed'>Прочитано</Link></li>
                            <li><Link to='/lists/thrown'>Брошено</Link></li>
                        </ul>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li><Link to='/profile'><span className="uk-margin-small-right" uk-icon="icon: user"></span> Профиль</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Menu;