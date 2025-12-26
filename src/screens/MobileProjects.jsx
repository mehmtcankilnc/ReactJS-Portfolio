import FoodLens from "../assets/Foodlens.png";
import Carentu from "../assets/Carentu.png";
import Stalker from "../assets/Stalker.png";
import ProjectCard from "../components/ProjectCard";
import CvCreator from "../assets/CvCreator.jpeg";
import TutorSudoku from "../assets/TutorSudoku.jpeg";

export default function MobileProjects({ id }) {
  return (
    <section
      id={id}
      className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-16 mb-24"
    >
      <ProjectCard
        id="cvcreator"
        title="CvCreator"
        desc="CvCreator is a hobby project that I wanted to develop since 
        university. The app allows users to create and download their own 
        resumes and cover letters without logging in. Also, users can save 
        their files by signing in. In addition, the app supports both Turkish 
        and English, as well as dark and light themes."
        img={CvCreator}
        stack={["TypeScript", "React Native", "Redux Toolkit", "i18n"]}
        codeLink="https://github.com/mehmtcankilnc/CvCreator"
        // demoLink="foodlens"
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="tutorsudoku"
        title="Tutor Sudoku"
        desc="Tutor Sudoku is an educational mobile app that helps users to 
        learn new sudoku solving techniques. Also, the users can scan a sudoku
        board when they get stuck on paper and take hints. The app features full
        localization (Turkish/English) and supports dark/light modes. The app is 
        currently in closed testing phase on Play Store."
        img={TutorSudoku}
        stack={["TypeScript", "React Native", "Redux Toolkit", "i18n"]}
        codeLink="https://github.com/mehmtcankilnc/TutorSudoku"
        // demoLink="foodlens"
        demoDisabled={true}
        reverse
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="foodlens"
        title="FoodLens"
        desc="FoodLens is a graduation thesis project that I have developed together 
        with my teammate. The app helps users track their daily 
        calorie intake and analyze the ingredients of packaged foods simply by 
        scanning the product’s barcode. In addition, FoodLens enables users to 
        create personalized diet plans by setting their nutritional goals."
        img={FoodLens}
        stack={["React Native", "Expo"]}
        codeLink="https://github.com/mehmtcankilnc/FoodLens"
        // demoLink="foodlens"
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="carentu"
        title="Carentu"
        desc="Carentu is a freelance project that I have developed together 
        with my colleague Fatma Nur Iskal. The app helps users find the perfect car 
        for renting."
        img={Carentu}
        stack={["React Native", "Cloudflare"]}
        reverse
        // codeLink="https://github.com/mehmtcankilnc/FoodLens"
        // demoLink="carentu"
        codeDisabled={true}
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="stalker"
        title="Stalker"
        desc="Stalker is a hobby project that I have developed together with my friend.
        The app helps users track their daily moods by selecting 
        custom-designed emojis that represent specific feelings. In addition, users 
        can track their habits, create new ones, and monitor their progress over time."
        img={Stalker}
        stack={["React Native", "Expo"]}
        codeLink="https://github.com/fnurIskal/stalker"
        // demoLink="stalker"
        demoDisabled={true}
      />
    </section>
  );
}
