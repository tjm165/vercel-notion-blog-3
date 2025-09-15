import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Thomas Moawad</h1>
        {/* <h2>Software Engineer</h2>

        <h2>Bio</h2> */}

        <div className="explanation">
          <p>
            <strong>I am a Senior Software Engineer </strong> at{' '}
            <ExtLink href="https://www.mckinsey.com">
              McKinsey & Company
            </ExtLink>
            {'. '}I am responsible for the Identity and Access Management
            platform. This is the part of the security that focuses on two core
            questions:
            <ol>
              <li>Who are you?</li>
              <li>What can you access?</li>
            </ol>
            These two questions are particularly complex for a global
            organization whose top priority is client confidentiality. One of my
            proudest accomplishments was leading the initiative to rewrite
            McKinsey's forgot password functionality. I love the challenges in
            this space because they let me dive deep into meaningful technology
            problems while significantly improving the security posture of a
            large organization.
          </p>

          <p>
            <strong> I am also purusing my MBA </strong> at{' '}
            <ExtLink href="https://www.kellogg.northwestern.edu">
              The Northwestern University Kellogg School of Management
            </ExtLink>{' '}
            with a focus in Strategy and Technology Management. My goal is to
            combine my technical background with the lessons I have learned at
            McKinsey and a structured business education. I believe that this
            will take me far in a career in tech leadership.
          </p>

          <p>
            <strong> I completed my B.S. in Computer Science </strong> at{' '}
            <ExtLink href="https://case.edu">
              Case Western Reserve University
            </ExtLink>
            {'. '}I served as the President of the{' '}
            <ExtLink href="https://engineering.case.edu/news/spartan-showcase-featuring-tommy-moawad">
              Case Engineers Council
            </ExtLink>{' '}
            and worked as a Resident Assistant (RA) for three years guiding
            freshmen students through their transition to college life.
          </p>
        </div>
      </div>
    </>
  )
}
