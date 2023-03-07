import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleDecrease = () => setCount((count) => count>0 ? count-1 : (alert('No negative count'), 0)) 
    const handleIncrease = () => setCount((count) => count ? count + 1 : 1)
    return (
        <div className="card">
          <button
            id='increase_button'
            onClick={handleIncrease}>
            count is {count}
          </button>
          <button
            id='decrease_button'
            onClick={handleDecrease}
          >
            Decrease
          </button>
      </div>
    )
}