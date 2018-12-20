export const contextBinding = (methods, ctx) => {
  methods.forEach((item) => {
    ctx[item] = ctx[item].bind(ctx)
  })
};