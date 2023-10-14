export function printStackTrace() {
    console.error(new Error().stack);
}