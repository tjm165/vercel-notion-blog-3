import Typescript from './svgs/typescript'
import Terraform from './svgs/terraform'
import Java from './svgs/java'
import Aws from './svgs/aws'
import Ocaml from './svgs/Ocaml'
import Python from './svgs/Python'
import Golang from './svgs/golang'
import Sql from './svgs/sql'
import ReactIcon from './svgs/reactIcon'

const features = [
  {
    text: 'TypeScript',
    icon: Typescript,
  },
  {
    text: 'React',
    icon: ReactIcon,
  },
  {
    text: 'Java',
    icon: Java,
  },
  {
    text: 'Python',
    icon: Python,
  },
  {
    text: 'AWS',
    icon: Aws,
  },
  {
    text: 'Terraform',
    icon: Terraform,
  },
  {
    text: 'SQL',
    icon: Sql,
  },
  {
    text: 'Go',
    icon: Golang,
  },
  {
    text: 'OCaml',
    icon: Ocaml,
  },
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={18} width={18} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)

export default Features
