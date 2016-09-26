import React, {Component} from 'react'
import i18n from 'meteor/universe:i18n';
import {supportedLanguages} from '/i18n/_supported_languages'
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'
import _ from 'lodash'

const T = i18n.createComponent();

Meteor.startup(()=>{

    let 
        browserLanguage = window.navigator.language
        languageIsAvailble = _.some(supportedLanguages, {code:browserLanguage})
        defaultLanguage = languageIsAvailble ? browserLanguage : 'en'

    Session.setDefault('language', defaultLanguage)

    Tracker.autorun(()=>{
       i18n.setLocale(Session.get('language'))
    })

})


class AnyComponent extends Component {

    render() {
        return <h1><T>register</T></h1>
    }
}

class LanguageSelector extends Component {

    _renderOptions() {

        return supportedLanguages.map((language) => {

            let {name, code} = language

            return <option value={code} key={name}>{name}</option>

        })

    }

    _onSelect(event) {
        let
            {selectLanguage} = this.props

            , language = event.target.value

        selectLanguage(language)

    }


    render() {
        let options = this._renderOptions()

        return (
            <select onChange={this._onSelect.bind(this)}>
                {options}
            </select>
        )
    }
}

export default React.createClass({

    render: () => {
        
        let selectLanguage = (language) => {
            Session.set('language',language)           
        }        
        
        return (
            <div className="example">
                <LanguageSelector selectLanguage={selectLanguage}/>
                <AnyComponent/>
            </div>    
        )
    }
})


