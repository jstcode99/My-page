import WaterTitle from "../component/waterTitle";
import ProgressBar from "../component/progressBar";

export default function About() {
  const skills = [
    {
      title: 'Frontent (HTML, CSS & JS)',
      steps: [
        {title: 'CSS', isComplete: true},
        {title: 'JS', isComplete: true},
        {title: 'Jquery', isComplete: true},
        {title: 'Sass', isComplete: true},
        {title: 'Animations basic', isComplete: true},
        {title: 'Responsive', isComplete: true},
        {title: 'Bootstrap', isComplete: true},
        {title: 'Material Css', isComplete: true, active: true},
        {title: 'TailWin Css', isComplete: false},
        {title: 'Figma / Adobe XD', isComplete: false}
      ]
    },
    {
      title: 'PHP',
      steps: [
        {title: 'PPO', isComplete: true},
        {title: 'PDO', isComplete: true},
        {title: 'Data Bases SQL', isComplete: true},
        {title: 'Laravel v5 - v9', isComplete: true, active: true},
        {title: 'Web Sockets', isComplete: false},
      ]
    },
    {
      title: 'SQL',
      steps: [
        {title: 'Creation and Modeling', isComplete: true},
        {title: 'Triggers', isComplete: true},
        {title: 'Volatile Tables', isComplete: true},
        {title: 'Console', isComplete: true, active: true},
        {title: 'Data Cleaning and Quality', isComplete: false},
        {title: 'Execution and Performance Plans', isComplete: false},
      ]
    },
    {
      title: 'Vue',
      steps: [
        {title: 'Basic', isComplete: true},
        {title: 'Composition API', isComplete: true},
        {title: 'Store (Vuex)', isComplete: true},
        {title: 'Store (Pina)', isComplete: true},
        {title: 'Axios & Http', isComplete: true},
        {title: 'Nuxt', isComplete: true},
        {title: 'Vite', isComplete: true, active: false},
        {title: 'Typscript', isComplete: false},
        {title: 'Testing', isComplete: false},
      ]
    },
    {
      title: 'React',
      steps: [
        {title: 'Basic', isComplete: true, active: true},
        {title: 'Store', isComplete: false},
        {title: 'Http', isComplete: false},
        {title: 'Next', isComplete: false},
        {title: 'Typscript', isComplete: false},
        {title: 'Testing', isComplete: false},
      ]
    },
  ]
  const listKills = skills.map((skill) =>
    <ProgressBar steps={skill.steps} title={skill.title} />
  );
  return (
    <>
      <div className="about">
        <section className="section-about-me">
          <h1 className="title-about">About me</h1>
          <p className="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </section>
        <section className="section-skills-exp">
          <h2 className="subtitle-about">Skills & Exp</h2>
          <p className="text-right">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </section>
        <section className="section-skills">
          { listKills }
        </section>
        <WaterTitle title={'About'}/>
      </div>
    </>
  );
}