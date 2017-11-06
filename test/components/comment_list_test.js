import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  const props = { comments: ['aaa', 'new comment', 'other'] }
  beforeEach(() => {
    component = renderComponent(CommentList, null, props)
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3)
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain(props.comments[0]);
    expect(component).to.contain(props.comments[1]);
    expect(component).to.contain(props.comments[2]);
  });

});