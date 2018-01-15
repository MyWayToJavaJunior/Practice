export const Zero = () => x => x;

const Succ = n => f => x => f(n(f)(x));

export default Succ;
