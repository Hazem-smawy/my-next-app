import {Container,Header,Logo,App,TextTitle,Categories,LinkItem,CatItem,SlidersBox,FirstCol,Sliders,Slide,SlideImage,TextBox} from './Home.styles'
import {RiApps2Line,RiMagicLine} from 'react-icons/ri'
import {SiToyota,SiBmw,SiMercedes,SiTesla,SiRenault} from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../public/images/fer.jpg'
import NewItems from '../components/NewItems/NewItems'
const Home = () => {
  let links =[
    {id:1,name:'Fav'},
    {id:2,name:'new'},
    {id:3,name:'famuas'},
  ]
  
  return (
    <>
     <Header>
            <Logo>
                <RiMagicLine />
            </Logo>
            <App>
                <RiApps2Line />
            </App>
      </Header>
       <Container>
        
          <TextTitle>
            <h2>Descover</h2>
            <p>All Your Fav is Here</p>
          </TextTitle>
          <Categories>
                <CatItem >
                  <SiBmw />
                </CatItem>
                <CatItem >
                  <SiMercedes />
                </CatItem>
                <CatItem >
                  <SiTesla />
                </CatItem>
                <CatItem >
                  <SiToyota />
                </CatItem>
                <CatItem >
                  <SiRenault />
                </CatItem>
              
          </Categories>
          <SlidersBox>
            <FirstCol>
              <div>
                {
                  links.map(l=>(
                    <LinkItem key={l.id}>
                      <Link href='#' >
                        <a>
                          {l.name}
                        </a>
                      </Link>
                    </LinkItem>
                   
                  ))
                }
              
              </div>
            </FirstCol>
            <Sliders>
                <Slide>
                  <SlideImage>
                      <Image src={image} alt="products" />
                  </SlideImage>
                  <TextBox>
                    <div>
                      <h3>sub Title </h3>
                      <p>Some Descriptin here </p>
                    </div>
                    <button>
                      Vist
                    </button>
                  </TextBox>
              </Slide>
            </Sliders>
          </SlidersBox> 
          <NewItems />
      </Container>
    </>
  )
}

export default Home