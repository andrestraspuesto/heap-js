import {Heap} from "../heap"

describe("heap testing", () => {

    
    it(`pop on empty Heap returns null`, () => {
        const heap = new Heap((a, b) => a <= b)
        expect(heap.pop()).toBe(null)
    })

    it(`isEmpty on empty Heap returns true`, () => {
        const heap = new Heap((a, b) => a <= b)
        expect(heap.isEmpty()).toBe(true)
    })

    it(`isEmpty on not empty Heap returns false`, () => {
        const heap = new Heap((a, b) => a <= b)
        heap.add(1)
        expect(heap.isEmpty()).toBe(false)
    })

    it(`add a bigger element to a heap where ordering function is
     (a, b) => a <= b manteins smaller element on top`, () => {
        const heap = new Heap((a, b) => a <= b)

        heap.add(4)
        heap.add(9)
        expect(heap.peek()).toBe(4)
    })

    it(`should be ordered from smaller to bigger when the compare function returns true 
    if the first argument is smaller or equal than second`, () => {
        const heap = new Heap((a, b) => a <= b)

        heap.add(4)
        heap.add(9)
        heap.add(15)
        heap.add(12)
        heap.add(3)
        expect(heap.pop()).toBe(3)
        expect(heap.pop()).toBe(4)
        expect(heap.pop()).toBe(9)
        expect(heap.pop()).toBe(12)
        expect(heap.pop()).toBe(15)
    })
    it(`should be ordered from bigger to smaller when the compare function returns true 
    if the first argument is bigger or equal than second`, () => {
        const heap = new Heap((a, b) => a >= b)

        heap.add(4)
        heap.add(9)
        heap.add(15)
        heap.add(12)
        heap.add(3)
        expect(heap.pop()).toBe(15)
        expect(heap.pop()).toBe(12)
        expect(heap.pop()).toBe(9)
        expect(heap.pop()).toBe(4)
        expect(heap.pop()).toBe(3)
    })
})