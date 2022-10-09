import React from 'react';

class Mode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    onChangeColor = () => {
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <div className='container'>
                <div className='item'
                     style={{backgroundColor: this.state.checked ? 'black' : 'white'}}>
                    <h3 style={{color: this.state.checked ? 'white' : 'black'}}>Render Props!</h3>
                    <p style={{color: this.state.checked ? 'white' : 'black'}}>
                        I was build with a two class components. A wrapper that handles state and state changing
                        functions, and a child that uses that functionality.</p>
                    <input type='checkbox' checked={this.state.checked}
                           onChange={this.onChangeColor}/>
                     <label onClick={this.onChangeColor} style={{color: this.state.checked ? 'white' : 'black'}}>
                        Dark Mode</label>
                </div>

            </div>
        );
    }

}

export default Mode;