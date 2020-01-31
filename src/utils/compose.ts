export default (...fns: Array<(a: any) => any>) => (init: any) => fns.reduceRight((value, fn) => fn(value), init);
