import "./index.css";
import Card from "./components/Card";

function App() {
  
const jobs = [
  {
    id: 1,
    dateOfPublish: "15 Oct, 2026",
    companyName: "Google",
    role: "Senior UI/UX Designer",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    tag1: "Full time",
    tag2: "Senior level",
    shift: "Morning",
    salaryPerHour: "$65/hour",
    location: "California, CA"
  },
  {
    id: 2,
    dateOfPublish: "14 Oct, 2026",
    companyName: "Amazon",
    role: "Frontend Developer",
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    tag1: "Part time",
    tag2: "Junior level",
    shift: "Night",
    salaryPerHour: "$35/hour",
    location: "Seattle, WA"
  },
  {
    id: 3,
    dateOfPublish: "13 Oct, 2026",
    companyName: "Meta",
    role: "React Developer",
    logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    tag1: "Full time",
    tag2: "Mid level",
    shift: "Morning",
    salaryPerHour: "$55/hour",
    location: "Menlo Park, CA"
  },
  {
    id: 4,
    dateOfPublish: "12 Oct, 2026",
    companyName: "NVIDIA",
    role: "AI Software Engineer",
    logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    tag1: "Full time",
    tag2: "Senior level",
    shift: "Night",
    salaryPerHour: "$75/hour",
    location: "Santa Clara, CA"
  },
  {
    id: 5,
    dateOfPublish: "11 Oct, 2026",
    companyName: "Apple",
    role: "iOS Developer",
    logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    tag1: "Full time",
    tag2: "Mid level",
    shift: "Morning",
    salaryPerHour: "$60/hour",
    location: "Cupertino, CA"
  },
  {
    id: 6,
    dateOfPublish: "10 Oct, 2026",
    companyName: "Microsoft",
    role: "Cloud Engineer",
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    tag1: "Full time",
    tag2: "Senior level",
    shift: "Morning",
    salaryPerHour: "$70/hour",
    location: "Redmond, WA"
  },
  {
    id: 7,
    dateOfPublish: "9 Oct, 2026",
    companyName: "Netflix",
    role: "Motion Designer",
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    tag1: "Part time",
    tag2: "Senior level",
    shift: "Night",
    salaryPerHour: "$58/hour",
    location: "Los Gatos, CA"
  },
  {
    id: 8,
    dateOfPublish: "8 Oct, 2026",
    companyName: "Adobe",
    role: "Graphic Designer",
    logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    tag1: "Part time",
    tag2: "Mid level",
    shift: "Morning",
    salaryPerHour: "$42/hour",
    location: "San Jose, CA"
  },
  {
    id: 9,
    dateOfPublish: "7 Oct, 2026",
    companyName: "IBM",
    role: "Backend Developer",
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    tag1: "Full time",
    tag2: "Junior level",
    shift: "Night",
    salaryPerHour: "$38/hour",
    location: "New York, NY"
  },
  {
    id: 10,
    dateOfPublish: "6 Oct, 2026",
    companyName: "Tesla",
    role: "Software Engineer",
    logo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    tag1: "Full time",
    tag2: "Mid level",
    shift: "Morning",
    salaryPerHour: "$52/hour",
    location: "Austin, TX"
  },
  {
  id: 11,
  dateOfPublish: "15 Oct, 2026",
  companyName: "Spotify",
  role: "Software Engineer",
  logo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
  tag1: "Full time",
  tag2: "Mid level",
  shift: "Morning",
  salaryPerHour: "$50/hour",
  location: "New York, NY"
  },
  {
  id: 12,
  dateOfPublish: "15 Oct, 2026",
  companyName: "Salesforce",
  role: "Cloud Developer",
  logo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
  tag1: "Full time",
  tag2: "Senior level",
  shift: "Night",
  salaryPerHour: "$55/hour",
  location: "San Francisco, CA"
  },
];

  return (
     <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card dateOfPublish={elem.dateOfPublish} companyName={elem.companyName} role={elem.role} logo={elem.logo} tag1={elem.tag1}    tag2={elem.tag2} shift={elem.shift} salaryPerHour={elem.salaryPerHour} location={elem.location} />
        </div>
      })}
    </div>
  );
}

export default App;
