import React, { Component } from 'react';

class ThemeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    cleanArray(array) {
        const len = array.length;
        const out = [];
        const obj = {};
        for (let i = 0; i < len; i++) {
          obj[array[i].theme] = 0;
        }
        for (let j in obj) {
          out.push(j);
        }
        return out;
      }

    render() { 

        const themesArray = this.cleanArray(this.props.games)
        //const themesArray.filter((theme,i,themes) => themes.inexOf(theme) === i)
        themesArray.sort()
        return (
            <div>
                <select
                    className='Select' 
                    onChange={(e) => this.props.handleThemeChange(e.target.value)}
                >
                    <option value="">Sort by theme</option>
                    {
                        themesArray
                        .map(theme => <option value={theme}>{theme}</option>)
                    }
                </select> 
            </div>
        );
    }
}
 
export default ThemeSelection;