import React from "react";
import Background from "./components/Background";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { COLORS } from "./utils/constants";

const PROJECTS = [
  {
    name: "🎥 Movie Recommender",
    desc: "A content-based recommendation system for movies. It uses the movie genre, synopsis and casting to recommend similar movies by resorting on word vector models. The database contains around 10K movies produced after 1970 for the user to select.",
    languages: [
      {
        name: "python",
        libraries: ["scikit_learn", "pandas", "numpy", "flask"],
      },
      {
        name: "js",
        libraries: ["react"],
      },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/trujilloRJ/movie-recommender",
      },
      {
        type: "website",
        url: "http://movie-recommender-v2.herokuapp.com/",
      },
    ],
  },
  {
    name: "👾 Corona Stats",
    desc: "A dashboard-like website that provides statistics about the world COVID-19 pandemic situation. With daily updates, the website allows quick access to your country's data using IP recognition as well as a comparison between multiple countries.",
    languages: [
      {
        name: "python",
        libraries: ["pandas", "numpy"],
      },
      {
        name: "js",
        libraries: ["angular", "node"],
      },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/trujilloRJ/coronaStats",
      },
      {
        type: "website",
        url: "https://www.virusdata.dev/home",
      },
    ],
  },
  {
    name: "🍔 Cambrer",
    desc: "A web application designed to facilitate a restaurant's daily operations. Focused on the Argentinian market, it includes many features such as a digital menu accessible by QR scansion, table monitoring, and order status. The code cannot be shared due to legal issues.",
    languages: [
      {
        name: "js",
        libraries: ["angular", "node"],
      },
    ],
    links: [
      {
        type: "website",
        url: "https://hola.cambrer.com.ar/home",
      },
    ],
  },
];

const BACKGROUND = [
  {
    time: "November 2019 - Present",
    title: "Ph.D. in Radar & Remote Sensing",
    location: "Sapienza University of Rome, Rome, Italy",
    description:
      "The research is focused on the study and efficient implementation of advanced passive radar signal processing algorithms.",
  },
  {
    time: "January 2019 - November 2019",
    title: "Data Scientist",
    location: "Telefonica Argentina, Buenos Aires, Argentina",
    description:
      "Resort in marketing analytics and machine learning tools to perform customer segmentation. Development of predictive models to reduce customer churn.",
  },
  {
    time: "August 2015 - December 2018",
    title: "B.Sc Telecommunications Engineering",
    location: "Balseiro Institute, Bariloche, Argentina",
    description:
      "A renowned Argentinian science institute that grants full scholarships to all its students and requires taking a competitive admission exam.",
  },
];

function App() {
  return (
    <div>
      <Section styles={"bg-gray-100"}>
        <Hero />
      </Section>
      <Section styles={"bg-gray-700 px-6"}>
        <SectionHeader label={"Projects"} color={COLORS.white100} />
        <Projects projects={PROJECTS} />
      </Section>
      <Section styles={"bg-gray-200 px-6"}>
        <SectionHeader label={"Experience"} color={COLORS.black} />
        <Background background={BACKGROUND} />
      </Section>
      <Section styles={"bg-gray-700 px-6"}>
        <ContactMe />
      </Section>
    </div>
  );
}

export default App;
