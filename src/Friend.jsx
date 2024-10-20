export default function Friend({friend}){
    const {name,email,id} =  friend ;
    // console.log(friend);
    
    return(
        <div className="box">
            <h4>Name:{name}</h4>
        <p>Id:{id}</p>
            <p>Email:{email}</p>
        </div>
    )
}