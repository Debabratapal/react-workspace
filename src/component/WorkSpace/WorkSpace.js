import React , {Component} from 'react';
import axios from 'axios';

class WorkSpace extends Component {

    state = {
        catagory : []
    }

    async componentDidMount() {
        try {
            const result = await axios.get('http://localhost:3001/api/get-catagory')
            console.log(result.data);
            this.setState({catagory: [...result.data.catagory]})
             
        } catch(err) {
            console.log(err);
            
        }
     

    }

    render() {
        let catagory =  this.state.catagory.map((el,i) => {
            return (
                <li key={el+i}>{el}</li>
            )
        })
        return (
            <div className={}>
               {catagory}
            </div>
        )
    }

}

export default WorkSpace;