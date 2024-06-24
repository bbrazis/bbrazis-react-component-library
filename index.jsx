import React from 'react';
import ReactDOM from 'react-dom/client'
import Badge from "./components/Badge"
import Banner from "./components/Banner/BannerMap"
import Card from './components/Card/index'
import Testimonial from './components/Testimonial/index'
import Tooltip from './components/Tooltip/index'
import Toast from './components/Toast/Toast'

function App() {
  return (
      <main>
      <h1>Component Library</h1>
      <div className="component-library--wrap">
        <details className="badge-wrapper">
          <summary>Badges</summary>
          <div className="badge-wrapper">
            <Badge>Badge</Badge>
            <Badge round={true}>Badge</Badge>
            
            <Badge color="red">Badge</Badge>
            <Badge color="red" round={true}>Badge</Badge>
            
            <Badge color="yellow">Badge</Badge>
            <Badge color="yellow" round={true}>Badge</Badge>
            
            <Badge color="green">Badge</Badge>
            <Badge color="green" round={true}>Badge</Badge>
            
            <Badge color="blue">Badge</Badge>
            <Badge color="blue" round={true}>Badge</Badge>
            
            <Badge color="indigo">Badge</Badge>
            <Badge color="indigo" round={true}>Badge</Badge>
            
            <Badge color="purple">Badge</Badge>
            <Badge color="purple" round={true}>Badge</Badge>
            
            <Badge color="pink">Badge</Badge>
            <Badge color="pink" round={true}>Badge</Badge>
          </div>
        </details>
        <details>
          <summary>Banners</summary>
          <div className="banner-wrapper">
            <Banner type="success">
              <Banner.Wrap>
                <Banner.Title>Congratulations!</Banner.Title>
              </Banner.Wrap>
            </Banner>
            <Banner type="success">
              <Banner.Wrap>
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
              </Banner.Wrap>
            </Banner>
            <Banner type="attention">
              <Banner.Wrap>
                <Banner.Title>Attention</Banner.Title>
              </Banner.Wrap>
            </Banner>
            <Banner type="attention">
              <Banner.Wrap>
                <Banner.Title>Attention</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
              </Banner.Wrap>
            </Banner>
            <Banner type="error">
              <Banner.Wrap>
                <Banner.Title>There is a problem with your application</Banner.Title>
              </Banner.Wrap>
            </Banner>
            <Banner type="error">
              <Banner.Wrap>
                <Banner.Title>There is a problem with your application</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
              </Banner.Wrap>
            </Banner>
            <Banner>
              <Banner.Wrap>
                <Banner.Title>Update available</Banner.Title>
              </Banner.Wrap>
            </Banner>
            <Banner>
              <Banner.Wrap>
                <Banner.Title>Update available</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
              </Banner.Wrap>
            </Banner>
          </div>
        </details>
        <details>
          <summary>Cards</summary>
          <div className="content-wrapper">
            <Card>
              <Card.Icon />
              <Card.Title>Easy Deployment</Card.Title>
              <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
            </Card>
          </div>
        </details>
        <details>
          <summary>Testimonials</summary>
          <div className="wrapper">
            <Testimonial img="./images/may-anderson.jpg">
              <Testimonial.Content>
                <Testimonial.Quote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</Testimonial.Quote>
                <Testimonial.Author name="May Anderson" title="CTO" business="Workcation" />
              </Testimonial.Content>
            </Testimonial>
            <Testimonial logo="./images/workcation-logo.svg">
              <Testimonial.Content>
                <Testimonial.Quote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</Testimonial.Quote>
                <Testimonial.Author name="May Anderson" title="CTO" business="Workcation" />
              </Testimonial.Content>
            </Testimonial>
          </div>
        </details>
        <details>
          <summary>Tooltips</summary>
          <div className="wrapper">
            <Tooltip>
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip style="light">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="blue">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="blue" style="light">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="magenta">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="magenta" style="light">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="green">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
            <Tooltip color="green" style="light">
              <Tooltip.Headline>Archive notes</Tooltip.Headline>
              <Tooltip.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</Tooltip.Text>
            </Tooltip>
          </div>
        </details>
        <details>
          <summary>Toasts</summary>
          <div className="wrapper">
            <Toast />
            <Toast type="success" />
            <Toast type="warning" />
            <Toast type="error" />
          </div>
        </details>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
