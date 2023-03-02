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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M256 448c-82.436-.094-149.239-66.898-149.333-149.333v-192c0-4.267.277-8.533.64-12.629-39.168 16.826-64.576 55.333-64.64 97.962v213.333C42.737 464.214 90.452 511.93 149.333 512h128c42.629-.064 81.136-25.473 97.963-64.64-4.267.363-8.363.64-12.629.64H256zM451.307 69.803l-48.725-50.325A64.01 64.01 0 0 0 384 6.4v78.933h78.08a63.723 63.723 0 0 0-10.773-15.53z"/><path d="M362.667 85.333c0 11.782 9.551 21.333 21.333 21.333h84.608a63.6 63.6 0 0 0-17.301-36.864l-48.725-50.325A64.24 64.24 0 0 0 362.667.618v84.715z"/><path d="M320 85.333V0h-64c-58.881.071-106.596 47.786-106.667 106.667v192c.071 58.881 47.786 106.596 106.667 106.667h106.667c58.881-.071 106.596-47.786 106.667-106.667V149.333H384c-35.346 0-64-28.653-64-64z"/></svg>
  