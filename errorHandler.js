
import { render } from '@testing-library/react';

class MyErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
                hasError: false
            }
        }
    
    componentDidCatch(error, info) {
        this.setState(state => ({ ...state, hasError:true }))
        sendToErrorReporting(error, info)
    }
    render() {
        if (this.state.hasError) {
            return <div>Sorry, something went wrong</div>
        } else {
            return this.props.children
        }
    }

    componentDidCatch() {

    }