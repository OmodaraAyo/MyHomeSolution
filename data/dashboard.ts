import { CircleCheckBig, CircleAlert  } from "lucide-react";

const dashboardLinkValue = "dashboard";


//created by Omodara Ayodele
//github: OmodaraAyo

{/**side-bar */}
export const sidebarLinks = [
  {
    label: "Dashboard",
    iconSrc: "/assets/images/dashboard/home.svg",
    link: `/${dashboardLinkValue}`,
  },
  {
    label: "Projects",
    iconSrc: "/assets/images/dashboard/project.svg",
    link: `/${dashboardLinkValue}/projects`,
  },
  {
    label: "Orders",
    iconSrc: "/assets/images/dashboard/orders.svg",
    link: `/${dashboardLinkValue}/orders`,
  },
  {
    label: "Messages",
    iconSrc: "/assets/images/dashboard/messages.svg",
    link: `/${dashboardLinkValue}/messages`,
  },
  {
    label: "Billings & Invoices",
    iconSrc: "/assets/images/dashboard/billing.svg",
    link: `/${dashboardLinkValue}/invoices`,
  },
  {
    label: "Settings",
    iconSrc: "/assets/images/dashboard/setting.svg",
    link: `/${dashboardLinkValue}/settings`,
  },
];

export const otherDashboardImages = [
  {
    alt: "start-project",
    iconSrc: "/assets/images/dashboard/start-project.svg",
  },
];


//created by Omodara Ayodele
//github: OmodaraAyo


{  /** projects */}
export const projectList = [
  {
    projectTitle: "Total Projects",
    counter: "330",
    icon: "/assets/images/dashboard/blueProjectIcon.svg",
    color: "#1C3FAA",
    iconBg: "#E5EBFFF0",
  },
  {
    projectTitle: "Completed Projects",
    counter: "281",
    icon: "/assets/images/dashboard/orangeProjectIcon.svg",
    color: "#E1A90A",
    iconBg: "#FCEDC2",
  },
  {
    projectTitle: "Total Projects",
    counter: "3",
    icon: "/assets/images/dashboard/greenProjectIcon.svg",
    color: "#1FC16B",
    iconBg: "#e9f9f1",
  },
];


//created by Omodara Ayodele
//github: OmodaraAyo


export const activeProjects = [
  {
    id: "1",
    name: "Shopify Website",
    dateSubmitted: "12/03/2025",
  },
  // {
  //     id: "2",
  //     name: "Just Website",
  //     dateSubmitted: "12/03/2025",
  // },
  // {
  //     id: "3",
  //     name: "My Website",
  //     dateSubmitted: "12/03/2025",
  // },
];

export const progressData = [
  "Project Submitted",
  "Research Completed",
  "Development completed",
  "Delivered",
];


//created by Omodara Ayodele
//github: OmodaraAyo


export const nextStepData = [
  {
    description: "Your project has been submitted successfully.",
    icon: CircleCheckBig,
    iconColor: "#1FC16B",
  },
  {
    description: "Currently under-going development.",
    icon: CircleAlert,
    iconColor: "#1C3FAA",
  },
];


//created by Omodara Ayodele
//github: OmodaraAyo


export const recentTransactionLabels = [
  "Project ID",
  "Date & time",
  "Services",
  "Amount paid",
  "Status",
  "Payment method",
];


//created by Omodara Ayodele
//github: OmodaraAyo


export const recentTransactionsDummyData = [
  {
    id: "#ORD12421",
    service: "Local SEO Campaign",
    amount: "4000",
    date: "25 July, 2025  20:12am",
    status: "Successful",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "#ORD12422",
    service: "Logo & Brand Identity",
    amount: "2500",
    date: "26 July, 2025  20:12am",
    status: "Successful",
    paymentMethod: "Card",
  },
  {
    id: "#ORD12423",
    service: "Website Revamp",
    amount: "850",
    date: "26 July, 2025  20:12am",
    status: "Pending",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "#ORD12424",
    service: "Social Media Package",
    amount: "700",
    date: "26 July, 2025  20:12am",
    status: "Failed",
    paymentMethod: "Card",
  },
];


//created by Omodara Ayodele
//github: OmodaraAyo

{/** New project data*/}

export const categoryOptions = [
  "Digital Marketing", 
  "Growth Solutions", 
  "Brand Scaling"
]