
import { Text,Container,DescriptionCaption,FirstHeader,ImageHome ,Btn} from "./Spinner.style"
import Black from '../../public/images/black2.jpg'
import Image from "next/image"
import {FaAngleRight} from 'react-icons/fa'
export default function Spinner(){
    return(
        <>
            <Container>
                <ImageHome>
                    <Image src={Black} alt="Home image" />
                </ImageHome>
                <Text>
                    <DescriptionCaption>supercar</DescriptionCaption>
                    <FirstHeader>RENT A CAR</FirstHeader>
                </Text>
                <Btn>
                    <FaAngleRight />
                </Btn>
            </Container>
        </>
    )
}