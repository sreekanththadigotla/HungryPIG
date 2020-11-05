// // test by default uses test like below
// import React from 'react';

// import {configure,shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import childCompe from './childComp';
// import divs from 

// //shallow test this comp not its child
// //Connecting the enzyme through adapter
// configure({adpater:new Adapter()})

// describe('<childComp/>', () =>
// {   let wrapper;

//     beforeEach(()=>{
//         wrapper = shallow(<childCompe></childCompe>);
//     });

//     it('should render two child comp i if we pass props',()=>{
       

//        expect(wrapper.find(<items/>)).tohaveLength(2);
//     });

//     it('should render two child comp i if not we pass props',()=>{
//         // const wrapper = shallow(<childCompe isAuthenticated/>);
//         wrapper.setProps({isAuthenticated:true});
//         expect(wrapper.find(<item/>)).tohaveLength(2);
//      });
// })

// //npm test start script