const allProjects = [
    {
        title: "Trip Buddy",
        description: 'Trip Buddy is designed for active travelers who want to enhance their travel experiences by easily discovering exciting activities and destinations during their journeys around the country and the world. With Trip Buddy, travelers can make the most out of their trips by accessing a range of useful features.',
        longDescription: `
            Embark on a transformative travel experience with Trip Buddy, a dynamic companion tailored for the modern wanderer. Geared towards active travelers, this innovative app redefines the exploration journey by seamlessly connecting users with exciting activities and destinations worldwide. Trip Buddy ensures a personalized adventure through its secure user profiles, where individuals can log in to curate a customized journey that resonates with their unique preferences. The app's intuitive location search feature opens up a world of possibilities, enabling users to effortlessly discover everything from bustling cityscapes to tranquil countryside retreats. With the "Save to Profile" function, users can build a personalized travel wishlist, preserving their favorite locations and activities for future exploration. Trip Buddy's commitment to efficient trip planning facilitates easy organization, allowing users to delete or add destinations with convenience, ensuring a well-structured and memorable travel itinerary. Navigate the world with confidence, uncovering new places and adventures while keeping travel plans impeccably organized and efficient. Trip Buddy is your key to unlocking a world of extraordinary travel experiences. Download now and let the exploration begin.
        `,
        keyPoints: [
            {
                title: "User Profiles",
                key: ['Secure and personalized experience', 'Allows users to log in for a customized journey']
            },
            {
                title: "Location Search",
                key: ['Enables searching for diverse travel destinations', 'Using geolocation API open-meteo and opentripmap']
            },
            {
                title: "Save to Profile",
                key: ['Users can bookmark favorite locations or activities', 'Helps keep track of desired places for future visits']
            },
            {
                title: "Trip Planning",
                key: ['Users can delete locations or activities, ensuring an organized travel itinerary', 'Supports effective trip planning']
            },
            {
                title: "Overall Feature",
                key: ['Designed for active travelers', 'Enhances travel experiences by discovering exciting activities and destinations', 'Accessible globally for journeys around the country and the world', 'Navigational tool for efficient travel']
            },
        ],
        used: ["REACT", "MONGODB", "APOLLO", "GRAPHQL", "MONGOOSE", "JWT", "MATERIALUI", "BYCRPT", "NODEMON", "HEROKU", "CSS", "HTML", "JAVASCRIPT"],
        imageLinks: [1, 2, 3, 4],
        keyImage: "/LOGOS/TRIP-BUDDY.jpg",
        url: 'https://immense-spire-99968-3fc73b4aa81c.herokuapp.com/',
        repoLink: "https://github.com/Sergrojas29/Trip-Buddy",
        videoLink: "https://www.youtube.com/watch?v=hAAbqcG55Gk",
        readMeLink: 'https://github.com/Sergrojas29/Trip-Buddy/blob/main/README.md'
    },
    {
        title: "Tech-Blog",
        description: 'Solo Project to create a social media page where you can log in securely using encryption. View other users’ posts, create your own or comment on existing posts. Using MySql to create a database that can be live throughout different devices. API for backend using Express and Sessions. And rendering the HTML dynamically using Handlebars to create each page. ',
        longDescription: `
        This solo project aims to develop a secure social media platform where users can log in with encrypted credentials. The application enables users to explore posts from others, engage in discussions by commenting on existing posts, and share their thoughts through creating personal posts. The project utilizes MySQL for database management, ensuring seamless accessibility across various devices. The backend is powered by Express and Sessions through an API, providing a robust foundation for secure user interactions. The dynamic rendering of HTML pages is achieved using Handlebars, enhancing the user experience. Key features include user account creation for full website access, commenting on posts to participate in discussions, and the ability to craft and share individual posts, fostering a collaborative online community.
        `,
        keyPoints: [
            {
                title: "Authentication and Security",
                key: ["Implementation of secure login functionality using encryption techniques.",
                    "Ensuring user data protection and privacy during authentication processes.",]
            },
            {
                title: "  Post Interaction",
                key: ["Viewing posts from other users to stay updated on relevant content.",
                    "Commenting feature for engaging in discussions on existing posts.",]

            },
            {
                title: "  Content Creation",
                key: ["User capability to create and share personalized posts.",
                    "Sharing thoughts, experiences, and content with the community.",]

            },
            {
                title: "  Database Management",
                key: ["Utilization of MySQL for efficient and reliable database management.",
                    "Seamless accessibility of data across different devices.",]

            },
            {
                title: "Backend Development",
                key: ["API development using Express for robust backend functionality.",
                    "Implementation of Sessions for enhanced user experience and security.",]

            },
            {
                title: "Dynamic HTML Rendering",
                key: ["Deployment of Handlebars for dynamic rendering of HTML pages.",
                    "Improving the overall user interface and interaction.",]

            },
            {
                title: "User Account Management",
                key: ["Account creation process for users to access all website features.",
                    "Facilitating a free signup mechanism for a seamless onboarding experience.",]
            },
        ],
        used: ["NODES", "MYSQL", "EXPRESS", "SESSIONS", "BYCRPT", "HANDLEBARS", "SEQUELIZE", "NODEMON", "HEROKU", "CSS", "HTML", "JAVASCRIPT", "PREMIERE",],
        imageLinks: [1, 2, 3, 4, 5],
        keyImage: "https://i.ibb.co/9HwGKK5/Tech-Blog.png",
        url: 'https://the-technology-blog-1a45bd1d041b.herokuapp.com/',
        repoLink: "https://github.com/Sergrojas29/Tech-Blog",
        videoLink: "https://www.youtube.com/watch?v=hAAbqcG55Gk",
        readMeLink: 'https://github.com/Sergrojas29/Tech-Blog/blob/main/README.md'
    },
    {
        title: "Purrfect Cafe",
        description: "A project to create a mock website for a Cat Cafe where you can become sign up to be a patron to the cafe. While logged in you can view the cafe Cats, see their profile. Using MySql to create a database using mySQL2 and Sequelize to write through JavaScript. As well as, Express and Sessions to create a server side user state and Express to create the server and routes. Finally, rendering the HTML dynamically using Handlebars to create each page. ",
        longDescription: `
        This solo project aims to develop a secure social media platform where users can log in with encrypted credentials. The application enables users to explore posts from others, engage in discussions by commenting on existing posts, and share their thoughts through creating personal posts. The project utilizes MySQL for database management, ensuring seamless accessibility across various devices. The backend is powered by Express and Sessions through an API, providing a robust foundation for secure user interactions. The dynamic rendering of HTML pages is achieved using Handlebars, enhancing the user experience. Key features include user account creation for full website access, commenting on posts to participate in discussions, and the ability to craft and share individual posts, fostering a collaborative online community.
        `,
        keyPoints: [
            {
                title: "User Registration:",
                key: ["Patrons can sign up for the Cat Cafe, creating a personalized account.",]
            },
            {
                title: "User Authentication:",
                key: ["Secure login functionality ensures patron access to exclusive features.",]
            },
            {
                title: "Cat Profiles:",
                key: ["Patrons, when logged in, can view profiles of the cafe's cats.",]
            },
            {
                title: "Database Management:",
                key: ["Utilization of MySQL and Sequelize for efficient database operations.",]
            },
            {
                title: "Server-Side User State:",
                key: ["Express and Sessions facilitate the creation and maintenance of user states.",]
            },
            {
                title: "Server and Routes:",
                key: ["Express is used to create the server, and routes are implemented for seamless navigation.",]
            },
            {
                title: "Dynamic HTML Rendering:",
                key: ["Handlebars dynamically generates HTML pages, enhancing the website's visual appeal.",]
            },


        ],
        used: ["NODES", "MYSQL", "EXPRESS", "SESSIONS", "BYCRPT", "HANDLEBARS", "SEQUELIZE", "NODEMON", "HEROKU", "CSS", "HTML", "JAVASCRIPT", "PHOTOSHOP", "FIGMA"],
        imageLinks: [1, 2, 3, 4],
        keyImage: 'https://i.ibb.co/LJhrC8K/catcafe.png',
        url: 'https://new-cat-cafe-748a9644a8c0.herokuapp.com/',
        repoLink: "https://github.com/Sergrojas29/Purrfect-Cat-Cafe",
        videoLink: "",
        readMeLink: 'https://github.com/Sergrojas29/Purrfect-Cat-Cafe#readme'
    },
    {
        title: "Nutrition-Tracker",
        description: "Nutrition Tracker is a heath tool that helps you monitor your calorie intake and other nutrients from the foods you eat. It can also help you set and achieve your health goals, such as losing weight, eating healthier, or managing a healthy life style.",
        longDescription: `
        The Nutrition Tracker is a comprehensive health tool designed to empower users in meticulously monitoring their daily caloric intake and nutritional profile. Beyond calorie tracking, it offers in-depth analysis of essential nutrients, aiding users in setting and realizing health goals such as weight management, adopting healthier eating habits, and achieving an overall balanced lifestyle. With user-friendly interfaces, personalized recommendations, and seamless integration with fitness objectives, the Nutrition Tracker is a valuable companion for individuals seeking informed and sustainable health choices.
Easily view the caloric and nutritional details of your meals, saving the information to a weekly tracker presented visually and statistically. Currently optimized for desktop use, plans are underway to expand functionality to mobile platforms and implement server capabilities, ensuring seamless data access across multiple devices. This evolution aims to enhance the user experience and facilitate a more flexible and accessible health management tool.

        `,
        keyPoints: [
            {
                title: "Calorie Monitoring",
                key: ["Track and monitor daily calorie intake to gain insights into your nutritional habits.",]
            },
            {
                title: "Nutrient Analysis",
                key: ["Assess intake of various nutrients including proteins, carbohydrates, fats, vitamins, and minerals.",]
            },
            {
                title: "Goal Setting",
                key: ["Set personalized health goals such as weight loss, adopting a healthier diet, or maintaining a balanced lifestyle.",]
            },
            {
                title: "Progress Tracking",
                key: ["Monitor and evaluate progress towards health goals over time.",]
            },
            {
                title: "Meal Logging",
                key: ["Log and record meals to keep a comprehensive record of daily nutritional consumption.",]
            },
            {
                title: "Customized Plans",
                key: ["Tailor nutrition plans based on individual dietary preferences and health objectives.",]
            },
            {
                title: "Health Lifestyle Management",
                key: ["Assist in managing and maintaining a healthy lifestyle through informed nutritional choices.",]
            },


        ],
        used: ["CSS", "HTML", "JAVASCRIPT", "PHOTOSHOP", "ILLUSTRATOR", "PREMIERE", "FIGMA"],
        imageLinks: [1, 2, 3, 4],
        keyImage: 'https://i.ibb.co/ZLyWRKP/nutritiontracker.png',
        url: 'https://sergrojas29.github.io/Nutrition-Tracker/',
        repoLink: "https://github.com/Sergrojas29/Nutrition-Tracker",
        videoLink: "",
        readMeLink: 'https://github.com/Sergrojas29/Nutrition-Tracker/tree/main#readme'
    },
    {
        title: "Weather-Dash",
        description: "Weather Dash my first mobile freindly webapp. It will provides you with current weather information for any location in the world. Just write a location city or country and it will present a current forcast and a five day forcast of the average temperature. Along with saving the previous search to clickable links. Along with mobile site, it also has an auto complete search function.",
        longDescription: `
        Introducing Weather Dash, my first mobile-friendly web app designed to deliver real-time weather insights for any global location. Simply input the city or country you're interested in, and Weather Dash will promptly provide you with the current forecast and a five-day projection of average temperatures. Not only does it ensure ease of use on mobile devices, but it also boasts an intuitive auto-complete search feature for swift location selection. As an added convenience, Weather Dash saves your previous searches as clickable links, streamlining your access to frequently checked locations. Stay informed and prepared with Weather Dash, your go-to companion for on-the-go weather updates.
I take pride in the design and construction phases of Weather Dash, particularly in crafting an auto-search function using Vanilla JavaScript. While employing React or another framework might have reduced some bugs, I've embraced the learning curve and challenges to maintain a high level of functionality. The present design, complete with icons I personally created and CSS animations, enhancing the website's overall appeal. As I reflect on the journey, I acknowledge there's room for improvement in design, and future iterations may explore incorporating modern frameworks for enhanced stability and an elevated user experience. Nevertheless, Weather Dash stands as a testament to creativity and hands-on development, offering a reliable and playful platform for quick weather insights.

        `,
        keyPoints: [
            {
                title: "Auto-Search Functionality",
                key: ["An intuitive auto-complete search function in Vanilla JavaScript for quick and efficient location selection.",]
            },
            {
                title: "Real-Time Weather Information",
                key: ["Provides current weather details for any specified city or country, ensuring users stay informed.",]
            },
            {
                title: "Five-Day Forecast",
                key: ["Presents a five-day forecast, offering a comprehensive view of the average temperatures over the upcoming days.",]
            },
            {
                title: "Mobile-Friendly Design",
                key: ["Tailored for mobile devices, ensuring a seamless and responsive user experience on various screen sizes.",]
            },
            {
                title: "Saved Searches",
                key: ["Persists previous search queries as clickable links, allowing users to easily revisit and track their frequently checked locations.",]
            },
            {
                title: "Custom Icons",
                key: ["Unique icons crafted in-house, adding a personalized touch to the visual elements of the web app.",]
            },
            {
                title: "CSS Animations",
                key: ["Incorporates CSS animations to infuse a sense of fun and engagement, enhancing the overall user interface.",]
            },
            {
                title: "User-Friendly Interface",
                key: ["Prioritizes a user-friendly design, aiming to make weather information retrieval straightforward and enjoyable.",]
            },
            {
                title: "Global Location Support",
                key: ["Offers weather information for any location worldwide, accommodating users regardless of geographical constraints.",]
            },

        ],
        used: ["CSS", "HTML", "JAVASCRIPT", "PHOTOSHOP", "ILLUSTRATOR", "PREMIERE", "FIGMA"],
        imageLinks: [
            "Chart Overview.png",
            "Input Overview.png",
            "Site Overview.png",
            "Week Overview.png",
            "Work Flow.png",
            "how.png",
        ],
        keyImage: 'https://i.ibb.co/3hybS5V/weatherdash.png',
        url: 'https://sergrojas29.github.io/Weather-App/',
        repoLink: "https://github.com/Sergrojas29/Weather-App/",
        videoLink: "https://user-images.githubusercontent.com/128770839/244914481-2632e9d4-38cb-4413-8a6a-96b42881b4c4.mp4",
        readMeLink: 'https://github.com/Sergrojas29/Weather-App/tree/main#readme'
    },
    {
        title: "Code-Quiz",
        description: "Create a creative way to make to a Quiz about javascript. Created with an array to have as many question and answers as needed. Got creative with the design of the styling and some extra buttons to view and reset highscores. Key features : highscore, Timers, Local Storage",
        longDescription: `
        Invent an imaginative and engaging JavaScript quiz, meticulously crafted using an array. So that it will accommodate an endless array of questions and answers. Elevate the user experience with uniquely designed styling, enhanced by additional buttons for seamlessly exploring and resetting high scores. Standout features include a robust high score tracking system, dynamic timers to add an element of urgency, and seamless integration with local storage for user convenience. This quiz isn't just a test of JavaScript knowledge; it's an immersive and aesthetically pleasing experience that combines functionality with a visually captivating design.
        learning into the fundamentals of DOM manipulation and harnessing the dynamic capabilities of JavaScript, to create an engaging interactive quiz. Infused with a matrix theme, the quiz not only serves as an educational tool but also enhances user enjoyment throughout the process. The project provided valuable insights into CSS techniques, mastering the timing of DOM creation and deletion, and leveraging local storage to seamlessly preserve user high scores. The implementation also incorporates robust error handling, ensuring a smooth experience whether users opt to reset or restart the quiz. This project stands as a testament to the power of JavaScript in crafting engaging and user-friendly web experiences.
        `,
        keyPoints: [
            {
                title: "Endless Array of Questions",
                key: ["Utilizes an array-based structure to accommodate an unlimited number of questions and answers, ensuring a diverse and expansive quiz experience.",]
            },
            {
                title: "Unique Styling and Design",
                key: ["Elevates user engagement through meticulously crafted styling, creating a visually captivating quiz interface that goes beyond the conventional.",]
            },
            {
                title: "Reset Buttons",
                key: ["Enhances user control with additional buttons for seamless exploration of the quiz and the convenience of resetting high scores.",]
            },
            {
                title: "High-Score Tracking",
                key: ["Implements a comprehensive high-score tracking system, providing users with a tangible metric for their quiz performance.",]
            },
            {
                title: "Dynamic Timers for Urgency",
                key: ["Integrates dynamic timers to inject an element of urgency, adding an exciting dimension to the quiz-taking experience.",]
            },
            {
                title: "Local Storage",
                key: ["Incorporates local storage functionality to effortlessly save and retrieve user high scores, ensuring a personalized and convenient experience across sessions.",]
            },
            {
                title: "Fundamentals of DOM Manipulation",
                key: ["Demonstrates proficiency in the fundamentals of DOM manipulation, showcasing the power of JavaScript in creating interactive and dynamic web content.",]
            },
            {
                title: "Error Handling for Smooth Experience",
                key: ["Implements robust error handling mechanisms, ensuring a smooth user experience even in scenarios like quiz resets or restarts.",]
            },


        ],
        used: ["CSS", 'HTML', "JAVASCRIPT"],
        imageLinks: [],
        keyImage: "https://i.ibb.co/6ZRk4n2/codequiz.png",
        url: 'https://sergrojas29.github.io/Code-Quiz/',
        repoLink: "https://github.com/Sergrojas29/Code-Quiz",
        videoLink: '',
        readMeLink: ''
    },
    {
        title: "E-Commerce-Back-End",
        description: "Using the capabilities of a MySQL database, I create backend for an e-commerce site. Employing Express, I've API, CRUD and seamlessly interfaced with JavaScript using Sequelize. This dynamic combination ensures efficient data management and communication, laying a solid foundation for a secure and responsive e-commerce platform.",
        longDescription: `
        Using the capabilities of a MySQL database, I create backend for an e-commerce site. Employing Express, I've API, CRUD and seamlessly interfaced with JavaScript using Sequelize. This dynamic combination ensures efficient data management and communication, laying a solid foundation for a secure and responsive e-commerce platform.
        `,
        keyPoints: [
            {
                title: "MySQL Database",
                key: ["Utilizes the capabilities of a MySQL database to establish a robust and scalable foundation for backend operations.",]
            },
            {
                title: "Express Framework",
                key: ["Implements the Express framework to streamline the creation of a powerful and flexible API for the e-commerce site.",]
            },
            {
                title: "CRUD Functionality",
                key: ["Incorporates CRUD (Create, Read, Update, Delete) operations, ensuring comprehensive data management and manipulation capabilities.",]
            },
            {
                title: "Seamless Integration with JavaScript",
                key: ["Interfaces seamlessly with JavaScript through Sequelize, enhancing the efficiency and responsiveness of the backend.",]
            },


        ],
        used: ["NODES", "MYSQL", "EXPRESS", "JAVASCRIPT", "SEQUELIZE", "NODEMON", "PREMIERE"],
        imageLinks: [
        ],
        keyImage: 'https://i.ibb.co/DQCr6kS/ecommercebackend.png',
        url: '',
        repoLink: "https://github.com/Sergrojas29/E-Commerce-Back-End/",
        videoLink: "https://user-images.githubusercontent.com/128770839/256343781-0870cd1e-2798-41da-8a9a-c858a44c9204.mp4",
        readMeLink: 'https://github.com/Sergrojas29/E-Commerce-Back-End/tree/main#readme'
    },
    {
        title: "NoSLQ-Social-Network-API",
        description: "NoSQL backend API for a social media site, featuring CRUD operations using the Express framework and Mongoose. This architecture ensures robust data management and interaction capabilities, providing a scalable and efficient foundation for the social platform.",
        longDescription: `
        NoSQL backend API for a social media site, featuring CRUD operations using the Express framework and Mongoose. This architecture ensures robust data management and interaction capabilities, providing a scalable and efficient foundation for the social platform.
        `,
        keyPoints: [
            {
                title: "NoSQL Database",
                key: ["Utilizes the capabilities of a MySQL database to establish a robust and scalable foundation for backend operations.",]
            },
            {
                title: "Express Framework",
                key: ["Implements the Express framework to streamline the creation of a powerful and flexible API for the e-commerce site.",]
            },
            {
                title: "CRUD Functionality",
                key: ["Incorporates CRUD (Create, Read, Update, Delete) operations, ensuring comprehensive data management and manipulation capabilities.",]
            },
            {
                title: "Seamless Integration with JavaScript",
                key: ["Interfaces seamlessly with JavaScript through Mongoose, enhancing the efficiency and responsiveness of the backend.",]
            },


        ],
        used: ["NODES", "MONGODB", "MONGOOSE", "JAVASCRIPT", "VALIDATOR", "NODEMON", "PREMIERE"],
        imageLinks: [],
        keyImage: 'https://i.ibb.co/ZKnNhTS/No-Sql-Backend.png',
        url: '',
        repoLink: "https://github.com/Sergrojas29/NoSLQ-Social-Network-API/",
        videoLink: "https://www.youtube.com/playlist?list=PL0FQ1ymciNybP4iS3D6SMvgsXYlj4ZMvX",
        readMeLink: 'https://github.com/Sergrojas29/NoSLQ-Social-Network-API/tree/main#readme'
    },
    {
        title: "Note-Taker",
        description: "Developed an application utilizing Express.js for the back end, allowing users to create, save, and retrieve notes seamlessly. The application efficiently manages note data, storing and retrieving information from a JSON file, providing a user-friendly platform for note-taking and organization. MySQL as the database and running the API through Express with mysql2, the application ensures efficient management of note data. This dynamic combination seamlessly stores and retrieves information, delivering a user-friendly platform dedicated to streamlined note-taking and organization.",
        longDescription: `
        Developed an application utilizing Express.js for the back end, allowing users to create, save, and retrieve notes seamlessly. The application efficiently manages note data, storing and retrieving information from a JSON file, providing a user-friendly platform for note-taking and organization. MySQL as the database and running the API through Express with mysql2, the application ensures efficient management of note data. This dynamic combination seamlessly stores and retrieves information, delivering a user-friendly platform dedicated to streamlined note-taking and organization.
        `,
        keyPoints: [
            {
                title: "Express.js Backend",
                key: ["Developed the application's backend using Express.js, providing a robust and efficient server framework.",]
            },
            {
                title: "Note Creation and Retrieval",
                key: ["Allows users to seamlessly create, save, and retrieve notes, enhancing user experience and productivity.",]
            },
            {
                title: "Seamless User Experience",
                key: ["Prioritizes a seamless and intuitive user experience, simplifying the process of creating, saving, and accessing notes.",]
            },
            {
                title: "JSON File Storage",
                key: ["Efficiently stores and retrieves note information from a JSON file, contributing to the simplicity and effectiveness of the application.",]
            },
            {
                title: "Dedicated Note-Taking Platform",
                key: ["Tailored to serve as a dedicated platform for note-taking, ensuring a focused and purposeful user interaction.",]
            },
            {
                title: "Balanced Integration of Technologies",
                key: ["Balances the integration of Express.js, MySQL, and mysql2 to create a harmonious and effective application infrastructure.",]
            },

        ],
        used: ["NODES", "EXPRESS", "MYSQL", "JAVASCRIPT", "NODEMON", "HEROKU"],
        imageLinks: [],
        keyImage: 'https://i.ibb.co/3BTJF8S/notetaker.png',
        url: 'https://danotetaker.onrender.com/',
        repoLink: "https://github.com/Sergrojas29/Note-Taker/",
        videoLink: "https://www.youtube.com/playlist?list=PL0FQ1ymciNybP4iS3D6SMvgsXYlj4ZMvX",
        readMeLink: 'https://github.com/Sergrojas29/Note-Taker/tree/main#readme'
    },
    {
        title: "Work-Day-Scheduler",
        description: "Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
        longDescription: `
        Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
        `,
        keyPoints: [
            {
                title: "User-Friendly Calendar",
                key: ["Developed a simple yet effective calendar application allowing users to save events for each hour of the day.",]
            },
            {
                title: "Starter Code Modification",
                key: ["Modified starter code to tailor the application to specific requirements, enhancing its functionality and user experience.",]
            },
            {
                title: "Browser Compatibility",
                key: ["The application runs smoothly in the browser, ensuring accessibility and convenience for users.",]
            },
            {
                title: "Bootstarp",
                key: ["Implemented dynamically updated HTML and CSS powered by jQuery, providing an engaging and responsive user interface.",]
            },
            {
                title: "Hourly Event Management",
                key: ["Users can easily manage and save events on an hourly basis, enhancing organization and productivity.",]
            },
            {
                title: "Interactive Platform",
                key: ["Created an interactive calendar that facilitates user engagement and efficient event scheduling.",]
            },


        ],
        used: ["NODES", "EXPRESS", "MYSQL", "JAVASCRIPT", "NODEMON"],
        imageLinks: ["Planner Run down.png"],
        keyImage: 'https://i.ibb.co/dBqrsw7/workdayscheduler.png',
        url: 'https://sergrojas29.github.io/Work-Day-Scheduler/',
        repoLink: "https://github.com/Sergrojas29/Work-Day-Scheduler/",
        videoLink: "",
        readMeLink: 'https://github.com/Sergrojas29/Work-Day-Scheduler/tree/main#readme'
    },
    {
        title: "Word-Guess-Game",
        description: "Word Guessing game featuring a timer, lives system, and customizable difficulty levels. Players can immerse themselves in the challenge of guessing words while navigating through various difficulty settings, all within a time-constrained and dynamic gaming environment.",
        longDescription: `
        Word Guessing game featuring a timer, lives system, and customizable difficulty levels. Players can immerse themselves in the challenge of guessing words while navigating through various difficulty settings, all within a time-constrained and dynamic gaming environment.
        `,
        keyPoints: [
            {
                title: "Word Guessing Game",
                key: ["Created an interactive and entertaining Word Guessing game.",]
            },
            {
                title: "Timer Feature",
                key: ["Implemented a timer, adding an element of urgency and challenge to the gameplay.",]
            },
            {
                title: "Lives System",
                key: ["Incorporated a lives system, enhancing the gaming experience by introducing an element of risk and strategy.",]
            },
            {
                title: "Difficulty Selection",
                key: ["Provided players with the option to select different difficulty levels, catering to a range of skill levels and preferences.",]
            },
        ],
        used: ["CSS", 'HTML', "JAVASCRIPT"],
        imageLinks: [],
        keyImage: 'https://i.ibb.co/B4Lpvqd/wordguessing.png',
        url: 'https://sergrojas29.github.io/Word-Guess-Game/',
        repoLink: "https://github.com/Sergrojas29/Word-Guess-Game/",
        videoLink: "",
        readMeLink: 'https://github.com/Sergrojas29/Word-Guess-Game/tree/main#readme'
    },
    {
        title: "Password-Generator",
        description: "Password generator that allows the users with the ability to customize generated passwords through user input. Incorporated a slider feature to translate values, determining the length and type of the generated password. Additionally, enhanced user understanding with a tooltip mechanism that provides security level descriptions when hovering over the corresponding indicators. A tool combines functionality and user interactivity, ensuring a secure and tailored password creation experience.",
        longDescription: `
        Password generator that allows the users with the ability to customize generated passwords through user input. Incorporated a slider feature to translate values, determining the length and type of the generated password. Additionally, enhanced user understanding with a tooltip mechanism that provides security level descriptions when hovering over the corresponding indicators. A tool combines functionality and user interactivity, ensuring a secure and tailored password creation experience.
        `,
        keyPoints: [
            {
                title: "Password Generator",
                key: ["Created a password generator offering secure and customizable password generation.",]
            },
            {
                title: "Slider Feature",
                key: ["Utilized a slider that dynamically translates values, influencing the password length and type during generation.",]
            },
            {
                title: "Customizable Password Length",
                key: ["Empowered users to determine the length of the generated passwords through an intuitive slider mechanism.",]
            },
            {
                title: "Enhanced User Understanding",
                key: ["Implemented a tooltip system for security level indicators, providing descriptive information when hovered over.",]
            },
            {
                title: "Security Level Indicators",
                key: ["Included security level indicators to help users gauge the strength of the generated passwords.",]
            },
            {
                title: "Comprehensive Security Features",
                key: ["Balances security with user customization, ensuring that generated passwords meet varying security needs.",]
            },
            {
                title: "Tailored Password Creation",
                key: ["Allows users to tailor passwords based on their preferences, striking a balance between security and convenience.",]
            },

        ],
        used: ["CSS", 'HTML', "JAVASCRIPT"],
        imageLinks: ['toottip.png', 'errormessage.png'],
        keyImage: 'https://i.ibb.co/HPSYDqr/password-Gen.png',
        url: 'https://sergrojas29.github.io/Password-Generator/',
        repoLink: "https://github.com/Sergrojas29/Password-Generator/",
        videoLink: "",
        readMeLink: 'https://github.com/Sergrojas29/Password-Generator/tree/main#readme'
    },
    // {
    //     title: "SQL Employee Tracker",
    //     description: "A local run command line application to track company departments, roles and employee.",
    //     used: ["NODES", "INQUIRE", "JAVASCRIPT", "MYSQL"],
    //     imageLinks: [],
    //     keyImage: 'https://i.ibb.co/cbVXNkJ/employeetrackersql.png',
    //     url: 'https://github.com/Sergrojas29/SQL-Employee-Tracker/tree/main#readme',
    //     repoLink: "https://github.com/Sergrojas29/SQL-Employee-Tracker/",
    //     videoLink: "",
    //     readMeLink: 'https://github.com/Sergrojas29/SQL-Employee-Tracker/tree/main#readme'
    // },
    // {
    //     title: "Profile-Generator",
    //     description: "This a Command Line Application that you will build a command-line tool that generates an HTML portfolio page from user input.",
    //     used: ["NODES", "INQUIRE","JAVASCRIPT"],
    //     imageLinks: ['toottip.png','errormessage.png'],
    //     keyImage: '',
    //     url: '',
    //     repoLink: "https://github.com/Sergrojas29/Profile-Generator/",
    //     videoLink: "https://github.com/Sergrojas29/Profile-Generator/tree/main#readme",
    //     readMeLink: 'https://github.com/Sergrojas29/Profile-Generator/tree/main#readme'
    // },


]

export default allProjects;

