import { RootState } from './redux/store';
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/features/hook';

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <button className='p-2 '
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className='p-2 '
          onClick={() => dispatch(incrementByAmount(51))}>
          IncrementByAmount
        </button>
      </div>


      <div>{count}</div>
      <div>
        <button className='p-2 '
          onClick={() => dispatch(decrement())}>

          Decrement
        </button>
        <button className='p-2 '
          onClick={() => dispatch(decrementByAmount(50))}>

          DecrementByAmount
        </button>
      </div>

    </>
  )
}

export default App
