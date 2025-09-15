import ProjectCard from "../components/ProjectCard";
import ANewShore from "../assets/anewshore.png";
import GalacticRun from "../assets/galacticrun.jpg";
import FruitVoyager from "../assets/fruitvoyager.png";

export default function UnityProjects() {
  return (
    <section className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mb-24">
      <ProjectCard
        id="anewshore"
        title="A New Shore"
        desc="A New Shore is a 3D survival game where a mysterious survivor 
         washes ashore in a peaceful village after a dramatic shipwreck. Claiming 
         to be a victim of fate, they quickly blend in, taking up an honest 
         job—or so it seems. Behind the friendly facade lies a cunning thief, 
         scheming to outwit the villagers and make off with their treasures."
        img={ANewShore}
        demoLink="https://mehmtcankilinc.itch.io/a-new-shore"
        codeLink="https://github.com/mehmtcankilnc/A-New-Shore"
        stack={["C#", "3D Game Development", "Survival Game"]}
        customImgStyle="w-80 sm:w-72 lg:w-100"
      />
      <hr className="my-2" style={{ color: "#e5e7eb" }} />
      <ProjectCard
        id="galacticrun"
        title="Galactic Run"
        desc="Galactic Run is a 2D space shooter mobile game where an astronaut with
         penguin head has decided to collect every stars and magnets which come from 
         space. But there are something wrong with this space, because an object can 
         destroy our astronaut: METEORS..."
        img={GalacticRun}
        demoLink="https://youtu.be/eZ5WZGLbAzQ?si=4AM4VSLJHr4aLjQV"
        codeLink="https://github.com/mehmtcankilnc/GalacticRun"
        stack={["C#", "2D Game Development", "Space Shooter"]}
        reverse
      />
      <hr className="my-2" style={{ color: "#e5e7eb" }} />
      <ProjectCard
        id="fruitvoyager"
        title="Fruit Voyager"
        desc="Fruit Voyager is a casual catch game I developed druing 'Unity ile Oyun 
         Geliştirme Atölyesi' by Tech Istanbul. Players step into a charming countryside 
         adventure! Play as a cheerful basket and gather fresh fruits across fields and 
         farms. Quick hands, full harvest!"
        img={FruitVoyager}
        demoLink="https://mehmtcankilinc.itch.io/fruit-voyager"
        stack={["C#", "Arcade", "Casual Catch Game"]}
        customImgStyle="w-80 sm:w-72 lg:w-100"
        codeDisabled
      />
    </section>
  );
}
