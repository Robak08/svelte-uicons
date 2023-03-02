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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 18h4.54a6.957 6.957 0 0 1-1.591 2.465l-1.484 1.485A6.977 6.977 0 0 1 18 23.54V19a1 1 0 0 1 1-1Zm5-13v10.515c0 .163-.013.324-.024.485H19a3 3 0 0 0-3 3v4.976c-.161.011-.322.024-.485.024H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5ZM7 7.75A.75.75 0 0 0 6.25 7H5.5a.5.5 0 0 0 0 1h.249v.084A.759.759 0 0 1 5 8.819a.742.742 0 0 1-.749-.751V6A.742.742 0 0 1 5 5.25a.779.779 0 0 1 .662.409.626.626 0 1 0 1.11-.58A2.022 2.022 0 0 0 5 4a1.991 1.991 0 0 0-2 1.985v2.1a1.991 1.991 0 0 0 2 1.985 2 2 0 0 0 2-1.986Zm3-3.125a.625.625 0 0 0-1.25 0v4.819a.625.625 0 1 0 1.25 0Zm3 1.763V5.25h1.388a.625.625 0 0 0 0-1.25h-2.013a.625.625 0 0 0-.625.625v4.811a.625.625 0 0 0 1.25 0v-1.8h1.239a.625.625 0 0 0 0-1.25Z"/></svg>
  