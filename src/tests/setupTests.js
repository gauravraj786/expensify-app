import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DoTEnv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
});

DoTEnv.config({ path: '.env.test' });