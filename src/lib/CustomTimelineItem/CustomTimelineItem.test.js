import React from 'react';
import CustomTimelineItem from './CustomTimelineItem';
import { directions } from '../enums/enums';
import { render } from '@testing-library/react';


describe('CustomTimelineItem', () => {
  let props;

  beforeEach(() => {
    props = {
      //TODO: ADD CORRECT PROPS
    }
  });

  // Shallow / unit tests begin here
  it('Should render component with Full Element', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: true,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(true)

  })
  
  it('Should render component with Simple Element', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: false,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false)

  })

  it('Should render component with Simple Element (default value)', () => {
    props = {
      ...props,
      direction: directions.LEFT,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false)

  })

  it('Should render component with Full Element with Left Arrow', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: true,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowLeft')).toBe(true)
  })
  
  it('Should render component with Full Element with Right Arrow', () => {
    props = {
      ...props,
      direction: directions.RIGHT,
      isOneWay: true,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true)

  })

  it('Should render component with Full Element with Right Arrow (default value)', () => {
    props = {
      ...props,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true)
  })
  
  it('Should render component with Element with List Dot Left', () => {
    props = {
      ...props,
      direction: directions.LEFT,
      isOneWay: false,
    }

    const {container} = render(<CustomTimelineItem {...props} />)
    expect(container.firstChild.children[0].classList.toString().includes('listDotLeft')).toBe(true)
    
  })
  
  it('Should render component with Element with List Dot Right', () => {
    props = {
      ...props,
      direction: directions.RIGHT,
      isOneWay: false,
    }

    const {container} = render(<CustomTimelineItem {...props} />)    
    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true)


  })
  
  it('Should render component with Element with List Dot Right (default value)', () => {
    props = {
      ...props,
    }

    const {container} = render(<CustomTimelineItem {...props} />)    
    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true)


  })

  

});