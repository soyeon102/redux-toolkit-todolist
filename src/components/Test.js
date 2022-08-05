// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../store/slices/todoSlice';

// const Todo = () => {
//   const count = useSelector((state) => state.todos.value);
//   const dispatch = useDispatch();
//   const [input, setInput] = useState(0);

//   const btnStyle = {
//     margin: '20px',
//   };

//   return (
//     <div>
//       <div>
//         <button style={btnStyle} onClick={() => dispatch(increment(input))}>
//           Increment
//         </button>
//         <span>{count}</span>
//         <button style={btnStyle} onClick={() => dispatch(decrement(input))}>
//           Decrement
//         </button>
//       </div>
//       <div>
//         <input
//           type='number'
//           value={input}
//           onChange={(e) => setInput(Number(e.target.value))}
//         />
//       </div>
//     </div>
//   );
// };

// export default Todo;
