import React, {Component} from 'react'
import i18n, {refreshOnChangeLocaleMixin} from 'meteor/universe:i18n';

const T = i18n.createComponent();
i18n.setLocale('ig')

class MyComponent extends Component{
    render(){
        return <T>register</T>
    }
}

export default React.createClass({
    render: () => {
        return <MyComponent/>    
    }
})


