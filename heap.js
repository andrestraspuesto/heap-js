/**
 * Data struture that guaranties that elements are extracted in the order defined by the function passed in
 * the constructor, where first argument goes to the top if the function returns true
 */
export class Heap {

    /**
     * Constructs Heap where elements are poped in the order determined by the shouldBeOnTop function,
     *  where the first argument that it receives is over the second argument if the function returns true
     * @param {function} shouldBeOnTop 
     */
    constructor(shouldBeOnTop){
        this.shouldBeOnTop = shouldBeOnTop
        this.queue = [null]
        this.size = 0

        this.down = (idx) => {
            let next = 2 * idx
            if(next > this.size){
                return
            }
            if(this.queue[next + 1] && this.shouldBeOnTop(this.queue[next + 1], this.queue[next])){
                next ++
            }
            if(this.shouldBeOnTop( this.queue[next], this.queue[idx])){
                this.swap(idx, next);
                this.down(next);
            }
        }

        this.up = (idx) => {
            const ih = Math.floor(idx/2);
            if(ih < 1){	
                return
            }
            if(this.shouldBeOnTop(this.queue[idx], this.queue[ih])){
                this.swap(idx, ih)
                this.up(ih)
            }
        }
    
        this.swap = (idx1, idx2) => {
            const aux = this.queue[idx1];
            this.queue[idx1] = this.queue[idx2];
            this.queue[idx2] = aux;
        }
    
    }

    add(element){
        this.queue.push(element)
        this.up(++this.size)
    }

    peek(){
        return this.queue[1]
    }

    pop(){
        if(this.size < 1){
            return null
        }
        this.swap(1, this.size--)
        const poped = this.queue.pop()
        this.down(1)
        return poped
    }

    isEmpty() {
        return this.size < 1
    }
    

    toString(){
        if(this.queue.length){
            return this.queue.slice(1).join()
        }
        return ""
    }
}
