
import react,{useState} from "react";
const ItemTour=(props)=>{
		const {data,deleteTours}=props;
		const [showInfo,setShow]=useState(false);

		return (
			<>
				<div className="Item">
					<div className="image">
						<img src={data.image} alt="no image" />
					</div>
					<div className="name_price">
						<div className="name">
						{data.name}
						</div>
						<div className="price">
						${data.price}
						</div>
					</div>
					<div className="info">
						{(!showInfo)?data.info.substring(0,200)+"....":data.info} {(!showInfo)?(<button className="buttonShow" onClick={()=>{setShow(true)}}>more</button>):<button className="buttonShow" onClick={()=>setShow(false)}>less</button>}
					</div>
					<div className="button_delete">
						<button onClick={()=>{deleteTours(data.id)}}>Don't interesting</button>
					</div>
				</div>	
			</>
			);
	
}

export default ItemTour;