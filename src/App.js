import React from "react";
import Background from "./components/Background";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { COLORS } from "./utils/constants";
import Publications from "./components/Publications";

const PROJECTS = [
  {
    name: "📡 FMCW radar target classification",
    desc: "A CNN that classifies FMCW radar targets based on the surrounding cells of the range-Doppler map. Several network architectures were tested with special attention to model size and number of parameters to provide a lightweight solution.",
    languages: [
      {
        name: "python",
        libraries: ["pytorch", "pandas", "numpy"],
      },
    ],
    links: [
      {
        type: "github",
        url: "https://github.com/trujilloRJ/fmcw_radar_cnn",
      },
      {
        type: "blog",
        url: "https://blogmljt.netlify.app/posts/radar-doppler/",
      },
    ],
  },
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
        url: "https://movie-recommender-jt.netlify.app/",
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
    time: "April 2023 - Present",
    title: "Radar Feature Developer - Tracking",
    location: "Magna Electronics GmbH, Munich, Germany",
    description:
      "Design and evaluation of algorithms for tracking extended targets in automotive applications. Assessment of multiple filters and measurement models for improved performance with minimal computational cost. Full collaboration with the signal processing team to improve detection quality and overall performance.",
  },
  {
    time: "November 2019 - March 2023",
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

const PUBLICATIONS = [
  {
    title: "Supervised reciprocal filter for OFDM radar signal processing",
    authors: "J. Trujillo Rodriguez, F. Colone, P. Lombardo",
    publisher:
      "IEEE Transactions on Aerospace and Electronic Systems 59 (4), 3871-3889",
    link: "https://ieeexplore.ieee.org/abstract/document/10021612",
  },
  {
    title:
      "Loaded reciprocal filter for OFDM-based passive radar signal processing",
    authors: "J. Trujillo Rodriguez, F. Colone, P. Lombardo",
    publisher: "2022 IEEE Radar Conference (RadarConf22), 1-6",
    link: "https://ieeexplore.ieee.org/abstract/document/9764355",
  },
  {
    title:
      "Exploiting the Properties of Reciprocal Filter in Low-Complexity OFDM Radar Signal Processing Architectures",
    authors: "J. Trujillo Rodriguez, G. P. Blasone, F. Colone, P. Lombardo",
    publisher:
      "IEEE Transactions on Aerospace and Electronic Systems 59 (5) 6907-6922",
    link: "https://ieeexplore.ieee.org/document/10145593",
  },
  {
    title:
      "A simple clutter suppression approach for OFDM-based passive radar exploiting reciprocal filter",
    authors: "J. Trujillo Rodriguez, G. P. Blasone, F. Colone, P. Lombardo",
    publisher: "IET Digital Library",
    link: "https://digital-library.theiet.org/content/conferences/10.1049/icp.2023.1294",
  },
  {
    title:
      "Experimental evaluation of Supervised Reciprocal Filter Strategies for OFDM-radar signal processing",
    authors: "J. Trujillo Rodriguez, F. Colone, P. Lombardo",
    publisher: "2023 IEEE Radar Conference (RadarConf23), 1-6",
    link: "https://ieeexplore.ieee.org/abstract/document/10149791",
  },
  {
    title:
      "Performance Prediction of the Loaded Reciprocal Filter for OFDM-based Passive Radar",
    authors: "J. Trujillo Rodriguez, F. Colone, P. Lombardo",
    publisher: "2022 19th European Radar Conference (EuRAD), 1-4",
    link: "https://ieeexplore.ieee.org/abstract/document/9924890",
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
        <SectionHeader label={"Publications"} color={COLORS.white100} />
        <Publications publications={PUBLICATIONS} />
      </Section>
      <Section styles={"bg-gray-200 px-6"}>
        <ContactMe />
      </Section>
    </div>
  );
}

export default App;
