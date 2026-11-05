export interface Project {
  slug: string;
  title: string;
  category: string;
  organization?: string;
  year?: string;
  description: string;
  technologies: string[];

  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";

  recognition?: string;

  github?: string;
  projectUrl?: string;
  presentationUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "urban-deprivation-mapping",
    title:
      "A Concept Bottleneck Approach For Mapping Urban Deprivation Using Earth Observation & Morphometrics",
    category: "Geospatial AI & Research",
    organization: "MSc Thesis | University of Twente",
    year: "2026",
    imageAlt:
      "Sentinel-2 imagery, predicted urban morphometrics, and urban deprivation classification",
    imageFit: "contain",
    description:
      "Developed a two-stage concept bottleneck framework that predicts interpretable urban morphometric characteristics from Sentinel-2 imagery to classify deprived urban areas. Evaluated across eight cities using tessellation-based and multiscale representations.",
    technologies: [
      "Python",
      "Sentinel-2",
      "PyTorch",
      "SHAP",
      "GeoPandas",
      "Scikit-learn",
    ],
    recognition:
      "Second Place — CLGE Young Surveyors' Contest 2026",
    presentationUrl:
      "https://www.clge.eu/2026/clge/welcome-to-the-clge-young-surveyors-contest-finals-27-august-2026",
    github:
      "https://github.com/saheelBreezo/urban-morphometrics-for-deprived-area-mapping",
  },

  {
    slug: "agricultural-activity-detection",
    title: "Mapping Agricultural Activities with Satellite Time Series",
    category: "Earth Observation & Machine Learning",
    organization: "NEO BV | Research Internship",
    year: "2025–2026",
    description:
      "Developed an LSTM-based model using Sentinel-1 SAR coherence and backscatter alongside Sentinel-2 optical time series to detect agricultural activities, including ploughing, harrowing, sowing, and harvesting. Achieved F1-scores of 0.85 for single-activity detection and 0.65 for multi-class classification, supporting agricultural monitoring and farmer incentive schemes in Denmark.",
    technologies: [
      "Python",
      "Sentinel-1",
      "Sentinel-2",
      "LSTM",
      "Time Series",
      "SAR",
    ],
  },

  {
    slug: "sen12-fusionnet",
    title: "SEN12-FusionNet: SAR–Optical Fusion for Deforestation Mapping",
    category: "Geospatial AI & Research",
    organization: "University of Twente",
    description:
      "Investigated the fusion of Sentinel-1 SAR and Sentinel-2 optical imagery for deforestation mapping in the Amazon rainforest, particularly under persistent cloud cover. Developed and compared early- and late-fusion deep learning architectures for semantic segmentation to assess the complementary value of radar and optical observations.",
    technologies: [
      "Python",
      "Sentinel-1",
      "Sentinel-2",
      "Deep Learning",
      "Semantic Segmentation",
    ],
    github: "https://github.com/saheelBreezo/SEN12-FusionNet",
  },

  {
    slug: "urban-heat-island",
    title: "Urban Heat Island Assessment Using Satellite Remote Sensing",
    category: "Urban Climate & Remote Sensing",
    organization: "Independent Research | Delhi, India",
    description:
      "Analyzed satellite-derived land surface temperature and land cover data to investigate the Surface Urban Heat Island effect across Delhi. Examined relationships between urban development, vegetation cover, and spatial temperature patterns to understand the influence of urbanization on urban heat.",
    technologies: [
      "Remote Sensing",
      "GIS",
      "Land Surface Temperature",
      "Spatial Analysis",
      "Python",
    ],
    github:
      "https://github.com/saheelBreezo/surface-heat-island-effect-in-delhi",
  },

  {
    slug: "geospatial-cloud-services",
    title: "Cloud-Native Geospatial Services and ML Inference Engine",
    category: "Geospatial Engineering",
    organization: "Blue Sky Analytics",
    year: "2022–2024",
    imageAlt:
      "Architecture of cloud-native geospatial processing and machine learning inference workflows",
    imageFit: "contain",
    description:
      "Developed scalable geospatial processing services and automated machine learning inference workflows using Python, GDAL, Docker, and AWS. Contributed to system architecture, processing orchestration, and CI/CD for production environmental monitoring applications.",
    technologies: [
      "Python",
      "GDAL",
      "AWS",
      "Docker",
      "CI/CD",
      "Geospatial Processing",
    ],
  },

  {
    slug: "landfill-monitoring",
    title: "Deep Learning for Landfill Monitoring Using Satellite Imagery",
    category: "Geospatial AI & Environmental Monitoring",
    organization: "Blue Sky Analytics",
    description:
      "Developed a U-Net-based semantic segmentation model to detect and delineate landfill sites from Sentinel-2 satellite imagery. Curated a multitemporal dataset covering major landfill sites across more than seven countries, including preparation of training masks and evaluation data for model development.",
    technologies: [
      "Python",
      "Sentinel-2",
      "U-Net",
      "TensorFlow",
      "Semantic Segmentation",
    ],
  },

  {
    slug: "biomass-burning-emissions",
    title: "Satellite-Based Greenhouse Gas Emissions from Biomass Burning",
    category: "Climate Analytics & Earth Observation",
    organization: "Blue Sky Analytics | Climate TRACE",
    description:
      "Developed a hybrid machine learning and empirical modelling framework to estimate daily CO₂, CH₄, and N₂O emissions from forest and agricultural fires. Integrated NASA FIRMS active fire observations, MODIS MAIAC, Sentinel-5P aerosol products, and land cover data to support global emissions monitoring through the Climate TRACE initiative.",
    technologies: [
      "Python",
      "NASA FIRMS",
      "MODIS",
      "Sentinel-5P",
      "Machine Learning",
      "AWS",
    ],
    github:
      "https://github.com/blueskyanalytics/GHG-emissions",
  },

  {
    slug: "air-quality-monitoring",
    title: "Satellite-Based Air Quality Monitoring and Fire Analysis in India",
    category: "Air Quality & Climate Analytics",
    organization: "Blue Sky Analytics | Breezo",
    description:
      "Developed and deployed a satellite-based air quality monitoring system producing daily PM₂.₅ estimates across India at 1 km spatial resolution using satellite observations, meteorological data, and ground measurements. Investigated agricultural residue burning through long-term NASA FIRMS fire analysis. The resulting Breezo dataset was featured in the IEA India Energy Outlook 2021.",
    technologies: [
      "Python",
      "MODIS",
      "Sentinel-5P",
      "ERA5",
      "Random Forest",
      "AWS",
    ],
    github:
      "https://github.com/saheelBreezo/air-quality-exploration",
    projectUrl:
      "https://www.iea.org/reports/india-energy-outlook-2021",
  },
];