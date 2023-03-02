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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 15.5c0 1.379-1.121 2.5-2.5 2.5S6 16.879 6 15.5 7.121 13 8.5 13s2.5 1.121 2.5 2.5Zm9.637-5.895c-.302.481-.597.951-.87 1.395h.729a2.504 2.504 0 0 1 2.103 3.86c-2.841 4.419-8.036 9.141-14.099 9.141a8.45 8.45 0 0 1-6.011-2.489A8.449 8.449 0 0 1 0 15.501C0 9.438 4.722 4.242 9.141 1.4a2.508 2.508 0 0 1 2.556-.092 2.5 2.5 0 0 1 1.304 2.196v.729c.443-.273.913-.568 1.395-.87C16.472 2.062 18.62.717 19.912.211a2.951 2.951 0 0 1 3.206.673 2.953 2.953 0 0 1 .673 3.206c-.506 1.292-1.852 3.438-3.152 5.516ZM13 15.5c0-2.481-2.019-4.5-4.5-4.5S4 13.019 4 15.5 6.019 20 8.5 20s4.5-2.019 4.5-4.5Z"/></svg>
  