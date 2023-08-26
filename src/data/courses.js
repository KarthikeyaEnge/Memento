const data = {
  courses: [
    {
      name: "Principals of UX/UI Design",
      img: "https://media.licdn.com/dms/image/C4E0BAQFdNatYGiBelg/company-logo_200_200/0/1636138753911?e=1700697600&v=beta&t=tdubJehhjtCbzaICaUOIqOe2sbECND7m6raJg8DBVuM",
      iby: "Meta",
      id: "2023",
      credentials:
        "https://www.coursera.org/account/accomplishments/certificate/HBJKQZPUEJSH",
      skills: ["Web Design", "Front-End Development", "UI/UX"],
    },
    {
      name: "MongoDB Associate Developer",
      img: "https://media.licdn.com/dms/image/C4D0BAQFKe8PwqzyHyA/company-logo_200_200/0/1635171226731?e=1700697600&v=beta&t=0sxKc7Z_2HkaJu2VCavOvZR2CohQCLQ2mtBkuMt0i1s",
      iby: "MongoDB",
      id: "2023",
      credentials:
        "https://www.credly.com/badges/24357bcf-9130-4f62-a0e2-c7c6595912ae/linked_in_profile",
      skills: ["MongoDB", "Node.js", "CRUD"],
    },

    {
      name: "Build and Secure Networks in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1439099?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Create and Manage Cloud Resources",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1294006?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Deploy and Manage Cloud Environments with Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1433175?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Deploy to Kubernetes in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1442921?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing", "Kubernetes"],
    },
    {
      name: "Perform Foundational Infrastructure Tasks in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1317010?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Set Up and Configure a Cloud Environment in Google Cloud",
      img: "https://media.licdn.com/dms/image/C4D0BAQFQvhMNUtax7g/company-logo_200_200/0/1668405290120?e=1700697600&v=beta&t=uaz_-oVN6SYP_qxUnC25DjXQOPDCFxAt0ZEobmv1Mow",
      iby: "Google Cloud",
      id: "2021",
      credentials:
        "https://www.cloudskillsboost.google/public_profiles/0d3ec6f2-9898-48bb-a4f5-bd3aedb4c3e1/badges/1378983?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Cloud computing"],
    },
    {
      name: "Introduction to Java and Object-Oriented Programming",
      img: "https://www.pinpng.com/pngs/m/554-5544599_university-of-pennsylvania-logo-png-transparent-png.png",
      iby: "University of Pennsylvania",
      id: "2021",
      credentials:
        "https://coursera.org/share/1b03102019a3a79048c4452f557acefd",
      skills: [
        "Java Tools",
        "Unit Testing",
        "Java Programming",
        "Object-Oriented Programming (OOP)",
        "Java Syntax",
      ],
    },
    {
      name: "Inheritance and Data Structures in Java",
      img: "https://www.pinpng.com/pngs/m/554-5544599_university-of-pennsylvania-logo-png-transparent-png.png",
      iby: "University of Pennsylvania",
      id: "2022",
      credentials:
        "https://coursera.org/share/a749dc16fc6627fab93d79c0b14b2cf4",
      skills: [
        "Debugging",
        "Problem Solving",
        "Java Programming",
        "Data Structure",
        "Inheritance",
      ],
    },
  ],
};

export default data;
