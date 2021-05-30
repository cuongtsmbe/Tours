
import './App.css';
import react,{Component} from "react";
import ItemTour from './components/ItemTour';
import axios from "axios";
class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }

  async componentDidMount(){
    let dataTours=[];
    try{
      await axios({
        method:'get',
        url:"https://course-api.com/react-tours-project",
        data:null
      }).then(function(res){
        dataTours=res.data;
      }).catch(function(err){
        console.log("fail exios");
      });
    }catch(e){
      console.log(`request axios fail: ${e}`);
    }

    this.setState({
      data:dataTours
    });
  }

   deleteTours=(id)=>{
    let pos=this.state.data.findIndex(e=>e.id===id);
    let dataNew=this.state.data.splice(pos,1);
    this.setState({
      data:this.state.data
    });
  }
  render(){
    if(this.state.data.length==0){
      return <div className="Load_frame">Loading...</div>
    }else{
      const {data}=this.state;
      return (
        <div className="App">
        {data.map((e)=> <ItemTour key={e.id} data={e} deleteTours={this.deleteTours} />)}
        </div>
      );
    }
}
}
export default App;
