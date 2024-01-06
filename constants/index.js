import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
export const menuList = [
  { label: "Home", path: "/" },
  { label: "SET", path: "/set" },
  { label: "Program Schedule", path: "/program-schedule" },
  { label: "Call for Papers", path: "/call-for-papers" },
  { label: "Publications", path: "/publications" },
  { label: "Special Seminars", path: "/special-seminars" },
  { label: "Academic Speakers", path: "/academic-speakers" },
  { label: "Registration", path: "/registration" },
  { label: "Committee", path: "/committee" },
  { label: "Download", path: "/download" },
  { label: "Sponsorship", path: "/sponsorship" },
];

export const important_dates = [
  { label: "Deadline for full paper submission", date: "25th Mar, 2024" },
  {
    label: "Notification of Paper Acceptance/Rejection",
    date: "25th Apr, 2024",
  },
  {
    label: "Deadline for Camera-Ready Paper Submission",
    date: "25th May, 2024",
  },
  { label: "Early Registration Deadline", date: "25th June, 2024" },
  { label: "Conference Dates", date: "30th & 31st Aug, 2024" },
];

export const socials = [
  {
    label: "Instagram",
    icon: <BsInstagram size={20} />,
    path: "https://instagram.com/goolluck_investments?igshid=MTk0NTkyODZkYg==",
    key: "Instagram",
  },
  {
    label: "Facebook",
    icon: <FaFacebookF size={20} />,
    path: "https://www.facebook.com/goolluckinvestment/",
    key: "facebook",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    path: "http://www.linkedin.com/in/goolluck-investments-8a5a862a0",
    key: "LinkedIn",
  },
  {
    label: "Twitter",
    icon: <RiTwitterXFill size={20} />,
    path: "https://twitter.com/Goolluck_Invest",
    key: "Twitter",
  },
];

export const chief_patrons = [
  { label: "Dr. Prashant Bhalla", designation: "President, MREI" },
  { label: "Dr. Amit Bhalla", designation: "Vice President, MREI" },
];

export const patrons = [
  {
    label: "Prof. (Dr.) Sanjay Srivastava",
    designation: "VC, MRIIRS, Faridabad",
  },
  { label: "Prof. (Dr.) Pardeep Kumar", designation: "PVC, MRIIRS, Faridabad" },
  { label: "Prof. (Dr.) Naresh Grover", designation: "VC, MRIIRS, Faridabad" },
  { label: "Shri R. K. Arora", designation: "Registrar, MRIIRS, Faridabad" },
];

export const co_patrons = [
  {
    label: "Prof. (Dr.) Geeta Nijhawan",
    designation: "Associate Dean, FET, MRIIRS, Faridabad",
  },
  {
    label: "Prof. (Dr.) Tapas Kumar",
    designation: "Associate Dean, FET, MRIIRS, Faridabad",
  },
];

export const general_chair = [
  {
    label: "Prof. (Dr.) Manoj Nayak",
    designation: "Professor & Head, Department of Mechanical Engineering",
  },
  {
    label: "Prof. (Dr.) Devendra Vashisht",
    designation: "Professor & Head, Department of Automobile Engineering, ",
  },
  {
    label: "Prof. (Dr.) Leena Gopinathan",
    designation:
      "Professor & Head, Department of Electrical and Electronics Engineering",
  },
  {
    label: "Prof. (Dr.) Abhiruchi Passi",
    designation:
      "Professor & Head, Department of Electronics & Communication Engineering ",
  },
  {
    label: "Prof. (Dr.) T. Senthil Vadivel",
    designation: "Professor & Head, Department of Civil Engineering",
  },
];

export const conference_chair = [
  {
    label: "Prof. (Dr.) Brahma Nand Agrawal",
    designation: "Professor, Department of Mechanical Engineering",
  },
];

export const co_convenor = [
  {
    label: "Dr. Anjali Gupta Professor",
    designation: "Department of Civil Engineering",
  },
  {
    label: "Dr. Prateek Mittal",
    designation: "Assistant Professor, Department of Mechanical Engineering",
  },
];
