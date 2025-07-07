export function useWait() {
    const wait = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    return {
        wait
    };
}
