## What frame did I pick and why?
*I chose to learn Vue.js as my front-end framework for several reasons. Firstly, Vue.js has gained significant popularity in the web development community, with many companies incorporating it into their tech stacks. By learning Vue.js, I aimed to align my skill set with industry demands, making myself more marketable to potential employers and increasing my chances of securing internships or job opportunities in the future. *
*Moreover, Vue.js is known for its simplicity and ease of use. Compared to other front-end frameworks like Angular or React, Vue.js has a gentler learning curve, making it more accessible for beginners. Another factor that influenced my decision to choose Vue.js is its versatility and scalability. Vue.js can be used for building small, single-page applications as well as large-scale, complex web projects. Its component-based architecture promotes code reusability and maintainability, which is crucial for managing and scaling applications over time. Vue.js has a vibrant and supportive community. The Vue.js ecosystem is continuously evolving, with active contributions from developers worldwide. There are plenty of resources available online, including documentation, tutorials, and community forums, which facilitated my learning journey. *
**I chose to learn Vue.js because of its industry relevance, ease of use, versatility, and strong community support. By mastering Vue.js, I aimed to enhance my employability, build impactful web applications, and contribute to the ever-growing ecosystem of Vue.js developers.**


## What about that framework appealed to me, for this project?
For this project, Vue.js appealed to me primarily because of its ease of use and flexibility. Given the scope of the project, which involved building a simple expense tracker application, Vue.js provided a perfect balance of functionality and simplicity. Its intuitive syntax and clear documentation allowed me to quickly prototype and develop the application without getting bogged down by complex configurations or steep learning curves.
**Vue.js's component-based architecture made it easy to organize the different parts of the application, such as input forms, expense lists, and analytics sections, into reusable and manageable components. This modularity not only improved code organization but also enhanced maintainability and scalability, ensuring that the project remained manageable as it evolved.**
Vue.js's reactive data binding and declarative syntax streamlined the process of managing and updating the application's state. This was particularly beneficial for a real-time application like an expense tracker, where changes in input fields or expense data needed to be reflected instantly without manual intervention.
In summary, Vue.js provided the perfect blend of simplicity, flexibility, and robust features needed to develop a functional and user-friendly expense tracker application for this project. Its suitability for rapid prototyping, coupled with its powerful capabilities, made it the ideal choice for bringing this project to life.

## What alternative frameworks did you consider?
When considering alternative frameworks for this project, TensorFlow.js emerged as a compelling option due to its extensive capabilities in machine learning and deep learning. As a JavaScript library, TensorFlow.js would have allowed me to incorporate sophisticated machine learning models directly into the expense tracker application, enabling features such as predictive analytics, anomaly detection, or personalized spending recommendations.
However, despite the potential of TensorFlow.js to add advanced analytical capabilities to the application, I ultimately chose to focus on Vue.js for several reasons. Firstly, Vue.js aligned more closely with the specific goals of this project, which primarily revolved around building a user-friendly and intuitive expense tracker. While TensorFlow.js excels in complex data analysis and model training, it may have introduced unnecessary complexity for this particular application.
**Moreover, my decision to prioritize Vue.js was driven by practical considerations such as the availability of learning resources, community support, and job market demand. Vue.js has gained significant popularity in web development circles, with many companies actively seeking Vue.js developers for frontend development roles. By choosing Vue.js for this project, I aimed to strengthen my skills in a framework that is widely used in industry and has a growing demand for proficient developers.
Overall, while TensorFlow.js offered exciting possibilities for integrating machine learning into the expense tracker application, my decision to focus on Vue.js was driven by its alignment with project goals, suitability for frontend development, and potential career opportunities in web development.**

## What resources did you read/watch/listen to?
I started with remixing Glitch's Vue-starter project. I then practiced basics with W3 schools. These are the other resources I used for learning Vue.js
https://vuejs.org/tutorial/#step-1
https://www.w3schools.com/vue/
https://www.youtube.com/watch?v=1GNsWa_EZdw
https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
https://www.traversymedia.com/blog/vue-expense-tracker

## Describe the site you built for this assignment. What does it do? What components or features of the framework did you explore for this project

The site I built for this assignment is an Expense Tracker application developed using Vue.js. The primary purpose of the application is to help users track their daily expenses, categorize them into different spending categories, and visualize their spending patterns over time.

Key features of the Expense Tracker include:

Expense Input: Users can enter details of their expenses, including description, amount, and category, through an intuitive user interface.
Expense Display: The application displays a list of recorded expenses, including their descriptions, amounts, and categories, allowing users to review their spending history.
Total Expenses Calculation: The application dynamically calculates and displays the total amount of expenses recorded by the user.
Category-wise Expense Totals: Users can view the total expenses incurred in each spending category, such as food, transportation, shopping, entertainment, and others, providing insights into their spending habits.
Expense Analytics: The application utilizes Chart.js to generate visual analytics and reports, such as monthly spending trends and category-wise expense distribution, presented in an intuitive and user-friendly manner.
Expense Sharing: A "Share" button is provided with each expense item, allowing users to download the expense data as a JSON file. This feature demonstrates event handling in Vue.js, where a method is invoked when the "Share" button is clicked to generate and download the JSON file.
LocalStorage Integration: The application utilizes the browser's localStorage to persist the expense data across page reloads. This feature leverages Vue.js lifecycle hooks (mounted) to load the stored expenses when the application is initialized.
Throughout the development of the Expense Tracker application, I explored various components and features of the Vue.js framework, including:

Vue Components: I used Vue components to modularize the application's UI elements, such as the input form, expense list, and analytics section, making the codebase more organized and maintainable.
Data Binding: Vue's two-way data binding facilitated seamless interaction between the UI and data model, allowing real-time updates to the displayed expenses and totals as users input new data.
Computed Properties: I leveraged computed properties in Vue to dynamically calculate the total expenses and category-wise expense totals based on the recorded data, ensuring accuracy and efficiency in data processing.
Lifecycle Hooks: Vue's lifecycle hooks, such as mounted(), were utilized to trigger specific actions, such as loading expenses from local storage when the application is initialized, ensuring data persistence and seamless user experience.
Third-party Library Integration: I integrated Chart.js, a popular data visualization library, with Vue.js to generate interactive charts and graphs for visualizing expense analytics, enhancing the application's functionality and user experience.
