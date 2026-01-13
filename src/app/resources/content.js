import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Pegah',
    lastName:  'Fallah',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Dubai',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Arabic']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/pegahfallah',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/pegahf/',
    },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:pegahcode@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer and Creator</>,
    subline: <>Hi, I'm Pegah. Welcome to my corner of the internet.</> 
}

const about = {
    label: 'Resume',
    title: 'My Resume',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendly.com/pegahcode/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a Software Engineer with a passion for transforming complex challenges into simple, elegant solutions. My work spans AI-driven tools, immersive AR experiences, and the seamless blend of design and technology.</>
    },
    work : {
     display: true, // set to true to display this section
    title: 'Work Experience',
    experiences: [
        {
            company: 'Local',
            timeframe: 'Jan 2025 – Present',
            role: 'Full-Stack Developer',
            achievements: [
                <>Owned frontend engineering domain, leading the engineering of features across payments, integrations, loyalty, analytics, and merchant dashboard systems in a Next.js application.</>,
                <>Reduced customer-facing page load times from 4-5s to less than 1s by implementing SWR caching, pagination, code splitting, and splitting monolithic endpoints into lightweight APIs.</>,
                <>Improved UI/UX flows across menus, item details, and checkout, reducing clicks-to-complete orders by 30%.</>,
                <>Integrated payment providers (BenefitPay, Apple Pay) and implemented webhook-based syncing for order status, receipts, and payment callbacks.</>,
                <>Introduced state architecture using Zustand to replace scattered component-level state, reducing re-renders and improving developer velocity.</>,
                <>Architected backend modules in Laravel (Filament, MySQL) including staff assignment, visit lifecycle, tipping attribution, and configurable checkout fields.</>,
                <>Reduced frontend bundle size by ~1.2 MB by moving heavy libraries to backend endpoints and implementing lazy loading.</>,
                <>Led extensive PR reviews, enforced architecture consistency, and reduced technical debt through targeted refactors across controllers, API endpoints, and frontend components.</>,
                <>Established code quality pipeline: configured ESLint, Prettier, Husky pre-commit hooks and Git workflows.</>,
                <>Set up testing infrastructure with Jest (unit tests) and Playwright (end-to-end tests), decreasing regression bugs by 40%.</>
            ],
            images: []
        },
        {
            company: 'Dubai Business Associates, Falcon & Associates',
            timeframe: 'Sept 2024 – Present',
            role: 'Innovation Associate',
            achievements: [
                <>Selected out of 5,500+ applicants for a leadership and professional development initiative under the patronage of His Highness Sheikh Mohammed bin Rashid Al Maktoum.</>,
                <>Defined 40+ customer segments and CRM strategies for MMI and Costa Coffee, resulting in a 20% increase in click-through rates.</>,
                <>Performed exploratory data analysis on datasets with over 7M records, improving audience targeting and maximizing ROI.</>,
                <>Automated recurring reporting processes using SQL, Python, and ETL workflows, saving 5+ hours per month.</>,
                <>Conducted A/B testing to optimize audience segmentation, boosting ad engagement by 25%.</>
            ],
            images: []
        },
        {
            company: 'Deloitte',
            timeframe: 'Sept 2023 – Sept 2024',
            role: 'Software Developer, Product Engineering',
            achievements: [
                <>Developed a provincial application consolidating 82 healthcare employee management systems into one, streamlining processes across the province.</>,
                <>Engineered a library of responsive, reusable components using React, TypeScript, Tailwind, and Storybook, improving design consistency and saving 3 hours per week.</>,
                <>Contributed to securing a $9 million contract by aligning technical proposals with client needs.</>
            ],
            images: []
        },
        {
            company: 'Meta',
            timeframe: 'May 2022 – Aug 2022',
            role: 'Technical Program Manager Intern',
            achievements: [
                <>Defined 15 success metrics for internal tools and developed a dashboard, guiding improvements in app health across Meta.</>,
                <>Scoped and managed priorities, risks, timelines, and resource requirements over a 12-week project duration, ensuring 100% of deadlines were met.</>,
                <>Enhanced collaboration and team efficiency by employing Agile methodologies, resulting in increased productivity.</>,
                <>Provided data-driven insights that shaped company OKRs, leading to significant productivity improvements.</>
            ],
            images: []
        },
        {
            company: 'Honda',
            timeframe: 'May 2020 – Aug 2021',
            role: 'Engineering Intern - IT Applications',
            achievements: [
                <>Facilitated a critical software migration project for over 500-line control processes through application configuration, QA testing, and Java debugging.</>,
                <>Led a middleware migration project that reduced engine factory downtime by 11 minutes daily, saving over $100,000 annually.</>
            ],
            images: []
        }
    ]
},
    studies: {
        display: true, // set to true to display this section
        title: 'Education',
        institutions: [
            {
                name: 'York University',
                description: <>BSc in Computer Science, June 2023.</>,
                achievements: [
                    <>Lassonde Scholarship (2021, 2022, 2023), </>,
                    <>IBM Changemaker Award (2023), </>,
                    <>YSpace Innovation Award (2023), </>,
                    <>Alexander Spasov Memorial Award (2021)</>
                ]
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Development projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/work/projects
    // All projects will be listed on the /home and /work routes
}

export { person, social, newsletter, home, about, work };