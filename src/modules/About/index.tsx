import React from 'react';
import { AppState } from '../../store';
import { connect } from 'react-redux';
interface AboutProps{

}
class Index extends React.Component{
    render(): React.ReactNode{
        return (<h1>About</h1>)
    }
}


const mapStateToProps = (state: AppState): AboutProps => ({
    
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Index);