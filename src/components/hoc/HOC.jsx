import React from "react";

export default function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidMount() {
            console.log("MOUNTED");
        }
        componentDidUpdate(prevProps) {
            console.log("UPDATED");

            console.log("old props:", prevProps);
            console.log("new props:", this.props);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return LogProps;
}
