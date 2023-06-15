import Button from '../components/Button';
import logo from '../logo.svg';
import '../App.css';
import { GoBell, GoFlame, GoThumbsup, GoAlert } from "react-icons/go";


function ButtonPage() {



    return <div>
        <div>
            <Button primary className=''><GoBell />Sale!</Button>
        </div>
        <div>
            <Button success ><GoThumbsup />Success!</Button>
        </div>
        <div>
            <Button warning ><GoAlert />Warning!</Button>
        </div>
        <div>
            <Button danger ><GoFlame />Danger!</Button>
        </div>
        <div>
            <Button secondary >Hide Ads</Button>
        </div>
        <div>
            <Button rounded >I'm a pill!</Button>
        </div>
        <div>
            <Button outline >I have an Outline!</Button>
        </div>
    </div>
}

export default ButtonPage;
