<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.817 24a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.969.758Zm4.2 0a1 1 0 0 1-.01-2h.01a1 1 0 0 1 .003 2Zm-8 0a1 1 0 0 1-.01-2h.01a1 1 0 0 1 .003 2Zm8.731-3a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.966.758Zm-8 0a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.966.758Zm5.269-6a1 1 0 0 1-.01-2h.01a1 1 0 0 1 .003 2Zm5.954-9.854a1.033 1.033 0 0 1-.742-.57A8.053 8.053 0 0 0 8.5.138a7.945 7.945 0 0 0-6.384 6.5 8.147 8.147 0 0 0 .033 2.889 1 1 0 0 1-.345.9 5.542 5.542 0 0 0 1.964 9.285 3.079 3.079 0 0 1 .074-.443l1.5-6a3 3 0 0 1 3.64-2.181c.613.119.978.616 1.858.148a2.971 2.971 0 0 1 2.655.149 1.248 1.248 0 0 0 1.217.039 3 3 0 0 1 4.452 3.3l-1.285 5.14c8.015-1.564 8.149-13.001.095-14.718Z"/></svg>
  