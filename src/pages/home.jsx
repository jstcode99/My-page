import WaterTitle from "../component/waterTitle";

export default function Home() {
  return (
    <>
      <div className="container home">
        <h1 className="title-home">Hi, I’m Sebastian, <br /> Web Developer</h1>
        <h6 className="subtext-home">Following the sky and the stars...</h6>
        <button className="btn btn-primary" style={{ marginTop : '1.2rem' }}>Contact</button>
        <WaterTitle title={'Home'}/>
      </div>
    </>
  );
}