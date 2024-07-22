# ESBench CI Examples

Examples for use ESBench in CI, each one is in a branch:

- [master](https://github.com/ESBenchmark/ci-examples/tree/master): Compare the performance of different operating systems using the `--tag` parameter and jobs from multiple GitHub actions.

- [sharding](https://github.com/ESBenchmark/ci-examples/tree/sharding): Speed up benchmarks by run benchmark simultaneously with 3 machines, each running one third of the suites.

- [native](https://github.com/ESBenchmark/ci-examples/tree/native): Build benchmark assets for the example [foreign.js](https://github.com/ESBenchmark/ESBench/blob/master/example/node/foreign.js).

These examples are separated from the core repository to avoid slow down its CI.
