
import FullName from "./Profile/FullName";
import Bio from "./Profile/Bio";
import emna from './Profile/image/emna.jpg';
import "./style.css";


export default function App() {
  const handleName=e =>
{ e.preventDefault();
alert(this.props.name);
};
return (
 <>
 <section>
 <div className="card">
<div className="card-header"> </div>
<br/>
<div className="card-body"> 

<FullName name="Emna Khilfaoui" onMouseMove={handleName}>
<img src={emna} alt="emna"
  width="220" className="img"/>
</FullName>  
<Bio text="React js developper"/>


</div>





</div>
 </section>
  
 </>
);
}
