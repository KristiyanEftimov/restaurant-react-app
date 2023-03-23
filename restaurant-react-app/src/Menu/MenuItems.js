export default function MenuItems(props) {
    return (
        <div>
            {
                props.order.map(sup => 
                    <li>{sup.name}</li> 
                )
            }
        </div>
        
    );
}