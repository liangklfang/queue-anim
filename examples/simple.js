import QueueAnim from 'queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<QueueAnim>
  <div key="1">依次进入</div>
  <div key="2">依次进入</div>
  <div key="3">依次进入</div>
  <div key="4">依次进入</div>
  <div key="5">依次进入</div>
</QueueAnim>, document.getElementById('__react-content'));
