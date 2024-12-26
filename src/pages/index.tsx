import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        {/* <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        /> */}
        <h1>Thomas Moawad</h1>
        <h2>Software Engineer</h2>

        {/* <Features /> */}

        <h2>Bio</h2>

        <div className="explanation">
          <p>
            My interest for software began in fourth grade when I used YouTube
            tutorials to teach myself to code. My school district did not
            provide computer science courses. Therefore, throughout middle and
            high school, I fed my curiousity by self-teaching myself to code. I
            have later recognized the valuable skill I acquired by "learning to
            learn". Additionally, in high school received an opportunity as a
            quality assurance intern for{' '}
            <ExtLink href="https://www.bdiexpress.com/us/en">
              Bearing Distributors Incorporated's
            </ExtLink>{' '}
            e-commerce website. This passion for technology led me to pursue
            Computer Science and Economics at{' '}
            <ExtLink href="https://case.edu">
              Case Western Reserve University.
            </ExtLink>{' '}
            During my undergraduate years, I honed my skills through internships
            as a software engineer at{' '}
            <ExtLink href="https://www.progressbook.com">ProgressBook</ExtLink>{' '}
            and{' '}
            <ExtLink href="https://www.mckinsey.com">
              McKinsey & Company.
            </ExtLink>{' '}
            Moreover, I led as a resident assistant, shaping the first-year
            experience for over 300 freshmen. I also practiced leadership skills
            as the president of the Case Engineers Council. Most notably, in
            2021, I led the organization to host our annual{' '}
            <ExtLink href="https://engineering.case.edu/news/spartan-showcase-featuring-tommy-moawad">
              Engineer's Week.
            </ExtLink>{' '}
            This initiative demanded numerous problem-solving skills and
            creativity to adhere to the university's social distancing
            protocols.
          </p>

          <p>
            Upon graduation from{' '}
            <ExtLink href="https://case.edu">
              Case Western Reserve University,
            </ExtLink>{' '}
            in the spring of 2021, I joined{' '}
            <ExtLink href="https://www.mckinsey.com">
              McKinsey & Company.
            </ExtLink>{' '}
            as a full stack software engineer. I have played a major roles in
            our security platform and low-code tooling. I am most proud of
            leading the initiative to rewrite our "Forgot Password"
            functionality and automate the{' '}
            <ExtLink href="https://cloud.google.com/blog/products/application-development/golden-paths-for-engineering-execution-consistency">
              "golden path"
            </ExtLink>{' '}
            of low-code applications.
          </p>
        </div>
      </div>
    </>
  )
}
