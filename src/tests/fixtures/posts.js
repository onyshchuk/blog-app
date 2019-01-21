import moment from 'moment';

export default [{
   id: '1',
   title: 'first post',
   body: 'first body',
   createdAt: moment(0).subtract(1, 'month').valueOf()
}, {
   id: '2',
   title: 'second post',
   body: 'second body',
   createdAt: 0
}, {
   id: '3',
   title: 'third post',
   body: 'third body',
   createdAt: moment(0).add(1, 'month').valueOf()
}];