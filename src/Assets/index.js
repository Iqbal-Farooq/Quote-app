import Like from "./Icons/Like";
import DisLike from "./Icons/DisLike";

export const Icon=props=>{
    switch (props.name){
        case "like":
            return <Like {...props} />;
            case "dislike":
                return <DisLike {...props}/>
                default:
                    return <div className="text-blue-500">not found</div>
    }
}