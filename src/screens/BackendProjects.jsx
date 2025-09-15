import ProjectCard from "../components/ProjectCard";

export default function BackendProjects() {
  return (
    <section className="modal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mb-24">
      <ProjectCard
        id="chitchat"
        title="ChitChat"
        desc="ChitChat is a real-time messaging system developed with ASP.NET 
        Core. Users can register, log in, and send instant messages to each 
        other. I used SignalR for real-time communication and implemented JWT 
        Bearer Authentication for secure identity management. The API is developed 
        with AspNetCoreRateLimit for rate limiting and a custom exception handling 
        middleware for centralized error management. The solution also follows a 
        lightweight Clean Architecture approach to ensure maintainability and 
        separation of concerns. The application is containerized with Docker, 
        uses Azure SQL as the database, and has been deployed on Microsoft Azure."
        // img={FoodLens}
        stack={["ASP.NET Core", "Clean Architecture", "Docker"]}
        codeLink="https://github.com/mehmtcankilnc/ChitChat"
        // demoLink="chitchat"
        demoDisabled={true}
      />
      {/* <hr className="my-2" style={{ color: "gray" }} /> */}
    </section>
  );
}
