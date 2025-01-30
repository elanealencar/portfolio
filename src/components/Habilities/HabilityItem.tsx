
interface HabilityItemProps {
    icon: string;
    name: string;
}

const HabilityItem  = ({ icon, name }: HabilityItemProps) => {
    return (
        <div className="habilities-item"> 
            <img src={icon} alt={name}/>
            <h3>{name}</h3>
        </div>
    );
}

export default HabilityItem;