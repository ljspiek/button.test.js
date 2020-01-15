import React from 'react';

export default function Button(props) {
    console.log(props)
  
    return <button onClick={() => props.onClick()}>Click me!</button>;
}

// const wrapper = shallow(<Button />);

// expect(wrapper.find('.clicks-0').length).to.equal(1);
// wrapper.find('a').simulate('click');
// expect(wrapper.find('clicks-1').length).to.equal(1);

