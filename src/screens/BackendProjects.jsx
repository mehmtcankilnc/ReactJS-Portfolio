import ProjectCard from "../components/ProjectCard";
import ChitChat from "../assets/ChitChat.png";
import LexiBox from "../assets/LexiBox.jpeg";
import CvCreator from "../assets/CvCreator.jpeg";

export default function BackendProjects() {
  return (
    <section className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mb-24">
      <ProjectCard
        id="cvcreatorapi"
        title="CvCreator API"
        desc="I developed my mobile application's API using ASP.NET Core. Users 
        can login via their Google accounts or continue as guest users. Users 
        can create their own resumes and cover letters. If the users signs in 
        via Google, they can save their files. I built the API according to Clean
        Architecture principles. I implemented various middlewares like rate 
        limiting, global error handling, JWT Bearer authentication, logging 
        requests etc. I used Playwright for generating PDF files and Supabase 
        as the database."
        img={CvCreator}
        stack={[
          "ASP.NET Core",
          "Clean Architecture",
          "Supabase",
          "SeriLog",
          "Playwright",
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
        img={ChitChat}
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
        img={LexiBox}
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
