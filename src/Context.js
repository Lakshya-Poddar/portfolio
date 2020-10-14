import React, {createContext, Component } from 'react'

export const Context = createContext();

export class ContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             darkmode:true
        }
    }
    modechange=()=>{
        
        this.setState(()=>{
            return{
            darkmode:!this.state.darkmode
            }
        })
        }
        
    render() {
        return (
            <Context.Provider value={{...this.state,name1:"hello",modechange:this.modechange}}>
                {
                    this.props.children
                }
            </Context.Provider>
        )
    }
}

export default ContextProvider
