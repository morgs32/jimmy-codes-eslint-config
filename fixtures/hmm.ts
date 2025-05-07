import { __foobar } from "./__double-underscore";

const a = __foobar;
assert.equal(a, "foobar");
