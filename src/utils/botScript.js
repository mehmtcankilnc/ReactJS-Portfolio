export const botScript = {
  start: {
    message:
      "Hi there! 👋 I'm Mehmetcan's virtual assistant. I'm here to showcase his skills and experience. How would you like to start?",
    options: [
      { label: "Experience 💼", next: "experience" },
      { label: "Projects 🚀", next: "projects" },
      { label: "Contact 📧", next: "contact" },
    ],
  },

  experience: {
    message:
      "Mehmetcan has over a year of hands-on experience in Full Stack Development. Recently, he focused on a freelance project dedicated to optimizing User Experience and system performance.",
    options: [
      { label: "Tech Stack?", next: "tech_stack" },
      { label: "Back to Start", next: "start" },
    ],
  },

  projects: {
    message:
      "Here is a collection of projects demonstrating expertise in both mobile and backend architectures. Which category would you like to explore?",
    options: [
      { label: "Mobile Apps", next: "mobile_projects" },
      { label: "Web APIs", next: "backend_projects" },
      { label: "Back to Start", next: "start" },
    ],
  },

  mobile_projects: {
    message:
      "Here are the mobile applications he developed. Select one to see the details:",
    options: [
      {
        label: "CvCreator",
        next: "cvcreator",
      },
      {
        label: "Tutor Sudoku",
        next: "tutorsudoku",
      },
      {
        label: "FoodLens",
        next: "foodlens",
      },
      {
        label: "Carentu",
        next: "carentu",
      },
      {
        label: "Stalker",
        next: "stalker",
      },
      { label: "Back to Projects", next: "projects" },
    ],
  },

  cvcreator: {
    message:
      "CvCreator is built using **TypeScript** & **React Native CLI**. It allows users to create and download resumes and cover letters instantly without logging in. Key technologies include **Redux**, **i18n**, and **Supabase**.",
    options: [
      {
        label: "More Info",
        next: "mobile_projects",
        url: "/mobile",
      },
      { label: "Back to Mobile Apps", next: "mobile_projects" },
    ],
  },

  tutorsudoku: {
    message:
      "Tutor Sudoku is developed with **TypeScript** & **React Native CLI**. It helps users learn new solving techniques and allows them to scan physical boards for digital hints when stuck. Powered by **Redux**, **AsyncStorage**, and **i18n**. The app is currently published on Play Store. [Store Link](https://play.google.com/store/apps/details?id=com.tutorsudoku)",
    options: [
      {
        label: "More Info",
        next: "mobile_projects",
        url: "/mobile",
      },
      { label: "Back to Mobile Apps", next: "mobile_projects" },
    ],
  },

  foodlens: {
    message:
      "Co-developed as a graduation thesis using **JavaScript** and **React Native**, FoodLens helps users track daily calorie intake and analyze packaged food ingredients simply by scanning barcodes. Built with **Expo**, **NativeWind**, and **AsyncStorage**.",
    options: [
      {
        label: "More Info",
        next: "mobile_projects",
        url: "/mobile",
      },
      { label: "Back to Mobile Apps", next: "mobile_projects" },
    ],
  },

  carentu: {
    message:
      "Carentu is a freelance project co-developed using **JavaScript** and **React Native**, designed to help users find the perfect rental car. Technologies used include **Cloudflare**, **Expo**, and **NativeWind**.",
    options: [
      {
        label: "More Info",
        next: "mobile_projects",
        url: "/mobile",
      },
      { label: "Back to Mobile Apps", next: "mobile_projects" },
    ],
  },

  stalker: {
    message:
      "Stalker is a mood-tracking app developed using **JavaScript** & **React Native**. Users can log their daily moods by selecting custom-designed emojis. Built with **Supabase**, **NativeWind**, and **Expo**.",
    options: [
      {
        label: "More Info",
        next: "mobile_projects",
        url: "/mobile",
      },
      { label: "Back to Mobile Apps", next: "mobile_projects" },
    ],
  },

  backend_projects: {
    message:
      "Here are the Web APIs he developed. Select one to see the details:",
    options: [
      { label: "CvCreator API", next: "cvcreator_api" },
      { label: "ChitChat API", next: "chitchat_api" },
      { label: "LexiBox API", next: "lexibox_api" },
      { label: "Back to Projects", next: "projects" },
    ],
  },

  cvcreator_api: {
    message:
      "This API powers the **CvCreator** mobile app and is built with **ASP.NET Core** following **Clean Architecture** principles. It features **Rate Limiting**, **Global Error Handling**, **JWT Auth**, and **Logging**. Technologies: **Supabase**, **SeriLog**, and **Playwright**.",
    options: [
      {
        label: "More Info",
        next: "backend_projects",
        url: "/backend",
      },
      { label: "Back to Web APIs", next: "backend_projects" },
    ],
  },

  chitchat_api: {
    message:
      "ChitChat is a real-time messaging system backend developed with **ASP.NET Core** and **Clean Architecture**. It utilizes **SignalR** for real-time comms, alongside **JWT Bearer**, **Docker**, and **AzureSQL**.",
    options: [
      {
        label: "More Info",
        next: "backend_projects",
        url: "/backend",
      },
      { label: "Back to Web APIs", next: "backend_projects" },
    ],
  },

  lexibox_api: {
    message:
      "Developed for the educational app 'LexiBox', this **ASP.NET Core** API follows **Vertical Slice Architecture**. It features **Global Exception Handling** and request logging via **SeriLog**. The application is containerized with **Docker** and uses **PostgreSQL**.",
    options: [
      {
        label: "More Info",
        next: "backend_projects",
        url: "/backend",
      },
      { label: "Back to Web APIs", next: "backend_projects" },
    ],
  },

  tech_stack: {
    message: "Which area would you like to dive into?",
    options: [
      { label: "Mobile Development", next: "tech_mobile" },
      { label: "Backend Development", next: "tech_backend" },
      { label: "Back to Start", next: "start" },
    ],
  },

  tech_mobile: {
    message:
      "In mobile development, he specializes in both **React Native** & **Expo**, creating cross-platform apps with smooth UI/UX using libraries like **Reanimated** and **NativeWind**.",
    options: [
      { label: "More Info", next: "tech_stack", url: "/mobile" },
      { label: "Back", next: "tech_stack" },
    ],
  },

  tech_backend: {
    message:
      "On the backend, he builds scalable systems using **ASP.NET Core**, with robust database management in **MsSQL/PostgreSQL**, secure authentication, and advanced architectural patterns.",
    options: [
      { label: "More Info", next: "tech_stack", url: "/backend" },
      { label: "Back", next: "tech_stack" },
    ],
  },

  contact: {
    message:
      "Let's connect! 🤝 You can reach me via email at [mehmtcankilinc@gmail.com](mailto:mehmtcankilinc@gmail.com) or connect through **LinkedIn**, **Instagram** & **X**.",
    options: [
      { label: "LinkedIn", next: "linkedin" },
      { label: "Instagram", next: "instagram" },
      { label: "X", next: "x" },
      { label: "Back to Start", next: "start" },
    ],
  },

  linkedin: {
    message:
      "Connect with me on LinkedIn: [Mehmetcan Kılınç](https://www.linkedin.com/in/mehmetcankilinc/)",
    options: [{ label: "Back to Contact", next: "contact" }],
  },

  instagram: {
    message:
      "Connect with me on Instagram: [@mehmtcankilinc](https://www.instagram.com/mehmtcankilinc)",
    options: [{ label: "Back to Contact", next: "contact" }],
  },

  x: {
    message:
      "Connect with me on X: [@mehmtcankilinc](https://x.com/mehmtcankilinc)",
    options: [{ label: "Back to Contact", next: "contact" }],
  },
};
