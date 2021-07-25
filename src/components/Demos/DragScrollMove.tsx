import React, {useRef} from 'react';
import {Box} from "@material-ui/core";
import styled from "styled-components";
import {useGesture} from "react-use-gesture";
import {config} from "react-spring";
import {useSpring, a} from "@react-spring/web";
import witcher from '../../assets/DragScrollMove/witcher.png'
import useMeasure from "react-use-measure";

let calc = (boxRef: React.MutableRefObject<HTMLDivElement>) => {
    let top = boxRef.current.getBoundingClientRect().top
    let halfHeight = boxRef.current.getBoundingClientRect().height / 2
    let centerY = top + halfHeight
    let left = boxRef.current.getBoundingClientRect().left
    let halfWidth = boxRef.current.getBoundingClientRect().width / 2
    let centerX = left + halfWidth
    return [centerX, centerY]
}
export const DragScrollMove = () => {
    let boxRef = useRef<HTMLDivElement>(document.createElement("div"))
    const [position, api] = useSpring(() => ({transform: "perspective(600px)", x: 0, y: 0, rotateX: 0, rotateY: 0,}))
    useGesture({
            onDrag: ({offset: [x, y]}) => {
                api.start({x: x, y: y})
            },
            onMove: ({xy}) => {
                let center = calc(boxRef)
                let xxx = xy[0] - center[0]
                let yyy = center[1] - xy[1]
                api.start({rotateY: xxx/3, rotateX: yyy/3})

            },
            onScroll: state => {
                // console.log(`onDrag: ${state}`)
            },
        },
        {domTarget: boxRef}
    )


    return (
        <AnimatedBoxWrapper ref={boxRef} style={position}>
            <ColorFill/>
        </AnimatedBoxWrapper>
    );
};


const BoxWrapper = styled(Box)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background: -webkit-linear-gradient(45deg, #12c2e9, #c471ed, #f64f59); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  touch-action: none;
`


const ColorFill = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: url(${witcher});
  background-size: cover;
  mix-blend-mode: multiply;
`

const AnimatedBoxWrapper = a(BoxWrapper)