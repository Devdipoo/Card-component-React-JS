import profile from "./assets/profile.jpg";

const Card = () => {
  return (
    <div className="card">
        
        <img className="card-image" src={profile}/>
        <h2 className="card-title">Dipo Ajileye</h2>
        <p className="card-text">I create user-friendly websites</p>
    </div>
  )
}

export default Card