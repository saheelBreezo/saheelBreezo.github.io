export type ProjectCategory =
  | "Research & GeoAI"
  | "Earth Observation Applications"
  | "Geospatial Engineering";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  github?: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "urban-deprivation-mapping",
    title: "Urban Deprivation Mapping",
    category: "Research & GeoAI",
    description:
      "An interpretable concept bottleneck framework for mapping deprived urban areas using Sentinel-2 imagery and urban morphometric characteristics.",
    technologies: [
      "Sentinel-2",
      "Deep Learning",
      "Concept Bottleneck Models",
      "Python",
    ],
    featured: true,
  },
  {
    slug: "agricultural-activity-detection",
    title: "Agricultural Activity Detection",
    category: "Research & GeoAI",
    description:
      "Detecting agricultural activities such as ploughing, sowing, and harvesting from Sentinel-1 and Sentinel-2 time series using deep learning.",
    technologies: [
      "Sentinel-1",
      "Sentinel-2",
      "LSTM",
      "TensorFlow",
    ],
    featured: true,
  },
  {
    slug: "insar-subsidence-monitoring",
    title: "Sentinel-1 InSAR Ground Subsidence Monitoring",
    category: "Earth Observation Applications",
    description:
      "Monitoring ground deformation using Sentinel-1 SAR interferometry, SBAS time-series analysis, and MintPy.",
    technologies: [
      "Sentinel-1",
      "InSAR",
      "MintPy",
      "Python",
    ],
    featured: true,
  },
  {
    slug: "urban-heat-islands",
    title: "Urban Heat Island Monitoring",
    category: "Earth Observation Applications",
    description:
      "Investigating urban thermal patterns using satellite observations and geospatial analysis.",
    technologies: [
      "Remote Sensing",
      "Geospatial Analysis",
      "Python",
    ],
    featured: false,
  },
  {
    slug: "forest-fire-emissions",
    title: "Forest Fire Emission Monitoring",
    category: "Earth Observation Applications",
    description:
      "Satellite-based monitoring and analysis of greenhouse gas emissions associated with forest fires.",
    technologies: [
      "Earth Observation",
      "Atmospheric Data",
      "Python",
    ],
    featured: false,
  },
  {
    slug: "satellite-air-quality",
    title: "Satellite-Based Air Quality Monitoring",
    category: "Earth Observation Applications",
    description:
      "Monitoring atmospheric pollution using satellite observations, environmental datasets, and geospatial analytics.",
    technologies: [
      "Satellite Data",
      "Air Quality",
      "Geospatial Analytics",
    ],
    featured: false,
  },
  {
    slug: "geospatial-cloud-services",
    title: "Scalable Geospatial Cloud Services",
    category: "Geospatial Engineering",
    description:
      "Designing satellite data acquisition, processing, and inference workflows using AWS, containerized services, and geospatial databases.",
    technologies: [
      "AWS",
      "Docker",
      "PostGIS",
      "Python",
    ],
    featured: true,
  },
  {
    slug: "satellite-data-fusion",
    title: "Satellite Data Fusion",
    category: "Geospatial Engineering",
    description:
      "Developing geospatial workflows for integrating and processing satellite observations from multiple sources.",
    technologies: [
      "Earth Observation",
      "Data Fusion",
      "Python",
    ],
    featured: false,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Research & GeoAI",
  "Earth Observation Applications",
  "Geospatial Engineering",
];