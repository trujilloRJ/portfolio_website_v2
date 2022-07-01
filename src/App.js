import React from "react";
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
    desc: "An dashboard-like website that provides statistic about the world COVID-19 pandemic situation. With daily updates, the website allows to quickly access to your country data using IP recognition as well as comparison between multiple countries.",
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
    desc: "A web application designed to facilitates a restaurant daily operations. Focus on the Argentinian market, it includes many features as digital menu accesible by QR, table monitoring, and order status. The code cannot be shared due to legal issues.",
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
        <SectionHeader label={"Background"} color={COLORS.black} />
      </Section>
    </div>
  );
}

export default App;
