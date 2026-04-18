const projects = [
  {
    id: 1,
    title: "Residential Rooftop Solar Installation",
    slug: "residential-rooftop-solar",
    image: "/Images/project-1.webp",
    location: "Ahmedabad, Gujarat",
    capacity: "5 kW",
    type: "On-Grid",
    description:
      "Installed a 5 kW rooftop solar system for a residential home to reduce electricity bills and ensure sustainable energy usage.",
  },
  {
    id: 2,
    title: "Commercial Solar Plant",
    slug: "commercial-solar-plant",
    image: "/Images/project-2.webp",
    location: "Surat, Gujarat",
    capacity: "25 kW",
    type: "On-Grid",
    description:
      "Deployed a commercial solar solution for a factory to optimize energy costs and improve efficiency.",
  },
  {
    id: 3,
    title: "Industrial Solar Installation",
    slug: "industrial-solar-installation",
    image: "/Images/project-3.webp",
    location: "Vadodara, Gujarat",
    capacity: "100 kW",
    type: "Hybrid",
    description:
      "Large-scale solar installation for industrial usage with hybrid backup support.",
  },
  {
    id: 4,
    title: "Off-Grid Solar System",
    slug: "off-grid-solar-system",
    image: "/Images/project-4.webp",
    location: "Rural Gujarat",
    capacity: "3 kW",
    type: "Off-Grid",
    description:
      "Provided an off-grid solar solution for an area with limited electricity access.",
  },
];

export function getAllProjects() {
  return projects;
}
