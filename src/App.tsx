import React from 'react'
import './index.css'
import './animation.css'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Awards from './Awards'

interface AppState {
  content: string | null
  dark: boolean
}

class App extends React.Component<any, AppState> {
  constructor (props: any) {
    super(props)
    this.state = { content: null, dark: true }
  }

  handleMenuOptionClick = (opt: string) => {
    const { content } = this.state
    this.setState({ content: content === opt ? null : opt })
  }

  flipDark = () => {
    const { dark } = this.state
    this.setState({ dark: !dark })
  }

  render () {
    const options = [
      {
        label: 'Education',
        icon: 'education'
      },
      {
        label: 'Experience',
        icon: 'experience'
      },
      {
        label: 'Skills',
        icon: 'skills'
      },
      {
        label: 'Awards',
        icon: 'awards'
      }
    ]
    const { dark, content } = this.state
    document.body.className = dark ? 'dark' : 'light'
    return (
      <div className="CVDisplay">
        <PageHead />
        <Menu
          handleMenuOptionClick={this.handleMenuOptionClick}
          options={options}
          flipDark={this.flipDark}
          content={content}
        />
        <CVContent content={content} />
        <Footer />
      </div>
    )
  }
}

function PageHead () {
  return (
    <div className="PageHead">
      <div>
        <h1>Julian Badillo</h1>
        <h2>Software Engineer</h2>
        <p>A successful day: when someone is grateful I&lsquo;m working by their side.</p>
      </div>
      <div>
        <div>&emsp;</div>
      </div>
      <div className="Logo">
        <img className="ImgDark" src="jb.svg" alt="jb" />
        <img className="ImgLight" src="jblight.svg" alt="jb" />
      </div>
    </div>
  )
}

interface MenuProps {
  options: Array<{ label: string, icon: string }>
  /** function type syntax that takes an event (VERY COMMON) */
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** any function as long as you don't invoke it (not recommended) */
  // onSomething: Function;
  handleMenuOptionClick: (opt: string) => void
  flipDark: () => void
  content: string | null
}

function Menu ({
  options, handleMenuOptionClick, flipDark, content
}: MenuProps) {
  return (
    <div>
      <div className="Menu">
        {options.map((option) => (
          <MenuOption
            optionName={option.label}
            key={option.label}
            icon={option.icon}
            handleMenuOptionClick={handleMenuOptionClick}
            selected={content === option.label}
          />
        ))}
        <div>
          <button onClick={flipDark} className="darkFlip" type="button" aria-label="Flip" />
        </div>
      </div>
    </div>
  )
}

interface MenuOptionProps {
  handleMenuOptionClick: (opt: string) => void
  optionName: string
  icon: string
  selected: boolean
}

function MenuOption ({
  handleMenuOptionClick, optionName, icon, selected
}: MenuOptionProps) {
  const className = selected ? 'selected' : ''
  return (
    <div>
      <button onClick={() => { handleMenuOptionClick(optionName) }} type="button" className={className}>
        <img src={`${icon}.svg`} className="ImgDark" alt="icon" />
        <img src={`${icon}light.svg`} className="ImgLight" alt="icon" />
        <span>{optionName}</span>
      </button>
    </div>
  )
}

function CVContent ({ content }: { content: string | null }) {
  let moreContent = <></>
  if (content === 'Experience') {
    moreContent = <Experience />
  } else if (content === 'Education') {
    moreContent = <Education />
  } else if (content === 'Skills') {
    moreContent = <Skills />
  } else if (content === 'Awards') {
    moreContent = <Awards />
  }
  return <div className="CVContent">{moreContent}</div>
}

function Footer () {
  return (
    <div className="Footer">
      <div>
        <a href="https://www.linkedin.com/in/juli4nb4dillo/">
          <img src="in.svg" alt="Linked In" className="ImgDark" />
          <img src="inlight.svg" alt="Linked In" className="ImgLight" />
        </a>

      </div>
      <div>
        <a href="https://github.com/julianbadillo">
          <img src="github.svg" alt="GitHub" className="ImgDark" />
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
      <div>
        <a href="https://github.com/juli4nb4dillo">
          <img src="github.svg" alt="GitHub" className="ImgDark" />
          <img src="githublight.svg" alt="GitHub" className="ImgLight" />
        </a>
      </div>
    </div>
  )
}

export default App
