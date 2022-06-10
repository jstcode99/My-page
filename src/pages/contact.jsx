
import WaterTitle from "../component/waterTitle";

export default function Contact() {
  return (
    <>
      <div className="container contact">
        <h1 className="title-home">Hi, Contact</h1>
        <h6 className="subtext-home">Following the sky and the stars...</h6>
        <button className="btn btn-primary" style={{ marginTop : '1.2rem' }}>Contact</button>
        <WaterTitle title={'Contact'}/>
      </div>
    </>
  );
}