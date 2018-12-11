import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScroll: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hasScroll)
  }

  hasScroll = (event) => {
    let scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScroll: true})
    } else {
      this.setState({ hasScroll: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScroll ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Download</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
    </div>
    )
  }
}

export default Header
