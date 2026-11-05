export interface Talk {
  id: string;
  year: number;
  title: string;
  event: string;
  date?: string;
  location?: string;
  recognition?: string;
  description?: string;

  videoUrl?: string;
  slidesUrl?: string;
  eventUrl?: string;
}

export const talks: Talk[] = [
  {
    id: "clge-2026",
    year: 2026,
    title:
      "A Concept Bottleneck Approach For Mapping Urban Deprivation Using Earth Observation and Morphometrics",
    event: "CLGE Young Surveyors' Contest Finals",
    location: "Munich, Germany",
    date: "August 27, 2026",
    videoUrl: "https://www.youtube.com/watch?v=5mdsIS8SJ8M",
    eventUrl:
      "https://www.clge.eu/2026/clge/clge-young-surveyors-contest-2026-winners-announced-at-intergeo",
    recognition: "2nd Place — Master's Thesis Category",
  },

  {
    id: "ashoka-2023",
    year: 2023,
    title: "Data Science in Climate Change",
    event: "Data Sciences for Social Impact · Ashoka University",
    location: "Delhi, India",
    date: "November–December 2023",
    slidesUrl: "https://github.com/saheelBreezo/ashoka-university",
    eventUrl:
      "https://www.ashoka.edu.in/data-sciences-for-social-impact/",
  },

  {
    id: "foss4g-2022",
    year: 2022,
    title: "Use of Open Source Tools to Estimate Global GHG Emissions",
    event: "FOSS4G 2022",
    date: "August 26, 2022",
    location: "Florence, Italy",
    videoUrl: "https://youtu.be/CYBFjpvhDMc",
    slidesUrl:
      "https://docs.google.com/presentation/d/1taIUPYxMLX_1c_va5lsDsSGmSv8B9aEB/edit",
    eventUrl: "https://talks.osgeo.org/foss4g-2022/talk/R8FHVA/",
  },

  {
    id: "ecmwf-2022",
    year: 2022,
    title:
      "Predicting PM₂.₅ Concentration Across India Using Multisource Earth Observation Data and Machine Learning",
    event: "ECMWF UEF 2022",
    date: "June 9, 2022",
    location: "Reading, United Kingdom",
    videoUrl: "https://vimeo.com/718750601/f241112338",
    slidesUrl:
      "https://events.ecmwf.int/event/296/contributions/3240/attachments/1897/3410/UEF2022_Ahmed.pdf",
    eventUrl: "https://events.ecmwf.int/event/296",
  },

  {
    id: "juelich-2021",
    year: 2021,
    title: "SmartAQ: Pan-India Air Quality Dataset at 1 km² Resolution",
    event:
      "Earth System Data Exploration Talk · Jülich Supercomputing Centre",
    date: "June 4, 2021",
    location: "Germany",
    videoUrl: "https://youtu.be/8JjgsnGhxA4",
    eventUrl:
      "https://www.fz-juelich.de/en/ias/jsc/about-us/structure/research-groups/esde",
  },

  {
    id: "cloud-optimized-geotiff-2020",
    year: 2020,
    title: "Introduction to Cloud Optimized GeoTIFF",
    event: "DataPub · TimescaleDB",
    date: "March 1, 2020",
    videoUrl: "https://youtu.be/62OD60PfBUE",
    slidesUrl:
      "https://github.com/saheelBreezo/Cloud-Optimised-Geotiff/tree/master",
    eventUrl: "https://www.youtube.com/watch?v=tFD3U9kOCag",
  },

  {
    id: "isro-2020",
    year: 2020,
    title: "Using Cloud for Geospatial Data Analytics",
    event: "ISRO NRSC User Interaction Meetup",
    date: "February 27, 2020",
    location: "Hyderabad, India",
    eventUrl: "https://www.nrsc.gov.in/",
  },

  {
    id: "cerca-2019",
    year: 2019,
    title: "AI + Geospatial Data for a Sustainable Earth",
    event:
      "Centre of Excellence for Research on Clean Air (CERCA) · IIT Delhi",
    date: "September 21, 2019",
    location: "New Delhi, India",
    eventUrl: "https://cerca.iitd.ac.in/category/about-us",
  },
];