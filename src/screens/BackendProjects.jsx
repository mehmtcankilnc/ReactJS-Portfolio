import ProjectCard from "../components/ProjectCard";
import ChitChat from "../assets/ChitChat.png";
import LexiBox from "../assets/LexiBox.jpeg";
import CvCreator1 from "../assets/CvCreator1.jpeg";
import CvCreator2 from "../assets/CvCreator2.jpeg";
import CvCreator3 from "../assets/CvCreator3.jpeg";
import CvCreator4 from "../assets/CvCreator4.jpeg";
import CvCreator5 from "../assets/CvCreator5.jpeg";

export default function BackendProjects() {
  return (
    <section className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mb-24">
      <ProjectCard
        id="cvcreatorapi"
        title="CvCreator API"
        desc="I developed this mobile app API using ASP.NET Core based on Clean 
        Architecture. Users can log in via Google or use the app as guests to 
        create resumes and cover letters. I utilized Playwright for generating 
        PDFs and PostgreSQL as the database. The project implements best practices 
        like rate limiting, global error handling, and JWT authentication. The API 
        is fully functional and hosted on my own Linux VPS."
        images={[CvCreator1, CvCreator2, CvCreator3, CvCreator4, CvCreator5]}
        stack={[
          "ASP.NET Core",
          "Clean Architecture",
          "PostgreSQL",
          "Playwright",
          "Docker",
        ]}
        codeLink="https://github.com/mehmtcankilnc/CvCreatorBackend"
        // demoLink="chitchat"
        demoDisabled={true}
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="chitchat"
        title="ChitChat API"
        desc="ChitChat is a real-time messaging system developed with ASP.NET 
        Core. Users can register, log in, and send instant messages to each 
        other. I used SignalR for real-time communication and implemented JWT 
        Bearer Authentication for secure identity management. The API is developed 
        with AspNetCoreRateLimit for rate limiting and a custom exception handling 
        middleware for centralized error management. The solution also follows a 
        lightweight Clean Architecture approach to ensure maintainability and 
        separation of concerns. The application is containerized with Docker, 
        uses Azure SQL as the database, and has been deployed on Microsoft Azure."
        images={[ChitChat]}
        stack={[
          "ASP.NET Core",
          "Clean Architecture",
          "Docker",
          "SignalR",
          "JWT Bearer",
        ]}
        codeLink="https://github.com/mehmtcankilnc/ChitChat"
        // demoLink="chitchat"
        demoDisabled={true}
        reverse
      />
      <hr className="my-2" style={{ color: "gray" }} />
      <ProjectCard
        id="lexibox"
        title="LexiBox API"
        desc="I developed an API for an educational app which is called LexiBox. 
        Users can submit new words in any language to learn, take a quiz from 
        their saved words. I built the API according to Vertical Slice
        Architecture using ASP.NET Core. Also, I used SeriLog for logging the 
        requests and errors to the files. I implemented global exception handling,  
        and mapping endpoints middlewares. The application is containerized with 
        Docker, uses PostgreSQL as the database."
        images={[LexiBox]}
        stack={[
          "ASP.NET Core",
          "Vertical Slice Architecture",
          "Docker",
          "SeriLog",
          "PostgreSQL",
        ]}
        codeLink="https://github.com/mehmtcankilnc/LexiBox.API"
        // demoLink="chitchat"
        demoDisabled={true}
      />
    </section>
  );
}
