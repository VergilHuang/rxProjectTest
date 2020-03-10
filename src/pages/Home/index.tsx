import React, { FC, useState, useEffect } from 'react'
import RX, { Animated } from 'reactxp';
// import {DefaultStyle} from "../../styles/_frame.style"
import HomeStyle from "./styles/_frame.style";

type Props = {

}

let animatedOpacityValue = RX.Animated.createValue(1.0);
let animatedScaleValue = RX.Animated.createValue(1.0);

let animatedColorValue = RX.Animated.createValue(0.0);
let interpolatedValue = RX.Animated.interpolate(animatedColorValue,
    [0.0, 0.5, 1.0], ['white', 'red', 'black']);

let animatedStyle = RX.Styles.createAnimatedViewStyle({
    opacity: animatedOpacityValue,
    transform: [{
        scale: animatedScaleValue
    }],
    backgroundColor: interpolatedValue
});

let customStyle = RX.Styles.createViewStyle({
    width: 100,
    height: 100,
    justifyContent: "center"
})

const Home: FC<Props> = () => {
    const [state, setstate] = useState("123")

    useEffect(() => {
        setstate("1234567")
    }, [])

    return (
        <RX.View style={HomeStyle.main}>
            <RX.View>
                <RX.Text style={HomeStyle.title}>Welcome to <RX.Text style={HomeStyle.name}>ReactXP</RX.Text></RX.Text>
                <RX.Text style={HomeStyle.label}>To get started, edit /src/App.tsx</RX.Text>
                <RX.Text style={HomeStyle.label}>{state}</RX.Text>
                <ABC />
            </RX.View>
            <Animated.View style={[customStyle, animatedStyle]}></Animated.View>
            <RX.View style={HomeStyle.links}>
                <RX.Link url={'https://github.com/Microsoft/reactxp'} style={HomeStyle.link}>GitHub</RX.Link>
                <RX.Link url={'https://microsoft.github.io/reactxp'} style={HomeStyle.link}>Docs</RX.Link>
                <RX.Link url={'https://github.com/Microsoft/reactxp/tree/master/samples'} style={HomeStyle.link}>Samples</RX.Link>
                <RX.Link url={'https://github.com/Microsoft/reactxp/tree/master/extensions'} style={HomeStyle.link}>Extensions</RX.Link>
            </RX.View>
        </RX.View>
    )
}


class ABC extends RX.Component<{}, { text: string }> {
    constructor(props: any) {
        super(props);
        this.state = { text: "321" }
    }

    render() {
        return (
            <RX.Text style={HomeStyle.label}>{this.state.text}</RX.Text>
        )
    }
}

export default Home;
