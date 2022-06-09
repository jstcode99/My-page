import WaterTitle from "../component/waterTitle";

export default function Work() {
  return (
    <>
      <div className="home">
        <h1 className="title-home">Hi, Work</h1>
        <h6 className="subtext-home">Following the sky and the stars...</h6>
        <button className="btn btn-primary" style={{ marginTop : '1.2rem' }}>Contact</button>
        <WaterTitle title={'Work'}/>
      </div>
    </>
  );
}