# CareerZunction

The platform is an open-source project facilitating student-internship connections. It offers user-friendly interface, comprehensive listings, and robust search options. Students create profiles, match with internships, and access resources. The platform encourages feedback, collaborates with institutions, and ensures regular updates. Overall, it provides valuable internship experiences for students.


## CareerZunction

# Main Link -> https://career-zunction.vercel.app/


##CareerZunction

![Website Look 1](https://github.com/Anusri2107/CareerZunction_Intern/assets/100567326/005e2982-21ef-46c4-a50e-dd0682446274)
![Website Look 2](https://github.com/Anusri2107/CareerZunction_Intern/assets/100567326/2d26f882-a2e5-4f70-ade3-95847231a6d2)

CareerZunction is an open-source platform designed to connect students with internship opportunities.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

CareerZunction aims to bridge the gap between students and internship opportunities. It provides a user-friendly interface for students to explore and apply for internships across various industries.

## Features

- Extensive Internship Listings: Browse through 200+ internship opportunities in diverse fields.
- User-Friendly Interface: Easily navigate through internship listings and application processes.
- Profile Creation: Students can create profiles to match with suitable internships based on their skills and preferences.
- Career Resources: Access resources such as resume writing tips, interview preparation guides, and career development workshops.
- Collaboration: CareerZunction collaborates with educational institutions and employers to expand internship offerings.

## Installation

### With Docker
1. Clone the repository:
```bash
`git clone [repository URL]`
```
2. Navigate to the project directory:
```bash
`cd careerzunction`
```
3. Build docker Image (only needed during first installation)
```bash
docker build -t careerzunction_intern:latest .        
```
4. Run docker image
```bash
docker run -d -p 3000:3000 careerzunction_intern:latest
```
Open [http://localhost:3000](http://localhost:3000) in your browser.


### With Docker Compose
1. Clone the repository:
```bash
`git clone [repository URL]`
```
2. Navigate to the project directory:
```bash
`cd careerzunction`
```
3. Build docker-compose (only needed during first installation)
```bash
docker-compose up --build               
```
4. Run docker-compose
```bash
docker-compose up
```
Open [http://localhost:3000](http://localhost:3000) in your browser.


### Without Docker
To run CareerZunction locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/HimanshuNarware/CareerZunction_Intern.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CareerZunction_Intern
   ```
3. Install dependencies:
   ```bash
      npm install
   ```
4. Start the development server:
   ```bash
      npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

Visit the CareerZunction website to explore internship opportunities, create a profile, and apply for internships. Utilize career resources available on the platform to enhance your internship search and professional development.

## Contributing

Contributions to CareerZunction are welcome! To contribute, follow these steps:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request

Please ensure your contributions align with the project's goals and adhere to coding conventions.

## License

CareerZunction is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.


### Founder   : [Himanshu Narware](https://github.com/HimanshuNarware)
### Maintaner : [Chaitali Sonare](https://github.com/Chaitali-sonare)
