import React, { FC, useState, useEffect } from 'react'
import RX from 'reactxp';
import _styles from './styles/default.patternx';

type Props = {

}

const Home: FC<Props> = () => {
    const [state, setstate] = useState("123")

    useEffect(() => {

        setstate("1234567")
    }, [])

    return (
        <RX.View style={_styles.main}>
            <RX.View>
                <RX.Text style={_styles.title}>Welcome to <RX.Text style={_styles.name}>ReactXP</RX.Text></RX.Text>
                <RX.Text style={_styles.label}>To get started, edit /src/App.tsx</RX.Text>
                <RX.Text style={_styles.label}>{state}</RX.Text>
                <ABC />
            </RX.View>
            <RX.View style={_styles.links}>
                <RX.Link url={'https://github.com/Microsoft/reactxp'} style={_styles.link}>GitHub</RX.Link>
                <RX.Link url={'https://microsoft.github.io/reactxp'} style={_styles.link}>Docs</RX.Link>
                <RX.Link url={'https://github.com/Microsoft/reactxp/tree/master/samples'} style={_styles.link}>Samples</RX.Link>
                <RX.Link url={'https://github.com/Microsoft/reactxp/tree/master/extensions'} style={_styles.link}>Extensions</RX.Link>
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
            <RX.Text style={_styles.label}>{this.state.text}</RX.Text>
        )
    }
}

export default Home;
