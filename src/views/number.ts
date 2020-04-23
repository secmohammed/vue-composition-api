export default function useNumbers(number: any) {
    const increment = () => {
        return number.value++
    }
    const decrement = () => {
        return number.value--
    }
    return {
        increment,
        decrement
    }
}
