# React Firebase Authentication Unsubscribe

This example demonstrates a common error in React applications that use Firebase Authentication: forgetting to unsubscribe from `onAuthStateChanged` when a component unmounts. This can result in memory leaks.

## Problem

The `onAuthStateChanged` listener continues to run even after the component is unmounted, leading to unnecessary resource consumption and potential memory leaks.

## Solution

The solution is to use the unsubscribe function returned by `onAuthStateChanged` within a cleanup function that runs when the component unmounts. This ensures that the listener is properly removed when the component is no longer needed.

## How to reproduce

1.  Create a React component that uses `onAuthStateChanged`.
2.  Run the component.
3.  Unmount the component (e.g., by navigating away from the page).
4.  Monitor memory usage – you'll see that memory isn't released properly if you don't unsubscribe.

## Files

* `bug.js`: Demonstrates the buggy code
* `bugSolution.js`: Demonstrates the corrected code