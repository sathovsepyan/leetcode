class LRUCache {
    private capacity;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key)!;
            this.cache.delete(key);
            this.cache.set(key, val);

            return val;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (!this.cache.has(key) && this.cache.size === this.capacity) {
            this.cache.delete([...this.cache.keys()][0])
        }

        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
