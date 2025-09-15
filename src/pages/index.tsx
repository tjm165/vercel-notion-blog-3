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
            I am a Senior Software Engineer 1, at{' '}
            <ExtLink href="https://www.mckinsey.com">
              McKinsey & Company
            </ExtLink>
            {'.'} I am responsible for the Identity and Access Management
            platform. This is the part of the security that revolves around the
            two main questions: "Who are you?" and "What can you access?". These
            two fundamental questions are quite complex at a global organization
            that is centered around client confidentiality. One of my proudest
            accomplishments was leading the initiative to rewrite our forgot
            password functionality. I love the challenges that come in this
            space, and the opportunity to make a meaningful impact on the
            security posture of a large organization.
          </p>

          <p>
            I am also purusing my MBA at{' '}
            <ExtLink href="https://www.kellogg.northwestern.edu">
              The Northwestern University Kellogg School of Management
            </ExtLink>{' '}
            with a focus in Strategy and Technology Management. I am excited to
            pair my technical background with a business education to become a
            more well-rounded leader in the tech space. I believe that this will
            take me far.
          </p>

          <p>
            I completed my B.S. in Computer Science at{' '}
            <ExtLink href="https://case.edu">
              Case Western Reserve University,
            </ExtLink>{' '}
            where I served as the President of the
            <ExtLink href="https://engineering.case.edu/news/spartan-showcase-featuring-tommy-moawad"></ExtLink>{' '}
            and worked as a Resident Assistant (RA) for three years guiding
            freshmen students through their transition to college life.
          </p>
        </div>
      </div>
    </>
  )
}
