import React from 'react';
import RX from 'reactxp';
import Home from './pages/Home';


export class App extends RX.Component<any, { a: number }> {
  constructor(props: any) {
    console.log("constructor")
    super(props)
    this.state = { a: 1 }
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps")

  }
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate")

  }
  UNSAFE_componentWillMount() {
    console.log("componentWillMount")

  }

  componentDidMount() {
    console.log("componentDidMount")

  }
  componentDidUpdate() {
    console.log("componentDidUpdate")

  }
  componentWillUnmount() {
    console.log("componentWillUnmount")

  }
  render() {
    console.log("render")

    return (
      <>
        <div>{this.state.a}</div>
        <RX.Text onPress={() => {
          this.setState(pre => ({
            a: pre.a + 1
          }))
        }}>click</RX.Text>
        <Home />
      </>
    );
  }
}

