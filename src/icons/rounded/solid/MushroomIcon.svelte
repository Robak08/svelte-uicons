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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.229 15.37A18.968 18.968 0 0 1 17 19a5 5 0 0 1-10 0 19.025 19.025 0 0 1 .77-3.63c3.074-1.748 5.386-1.748 8.459 0Zm4.825-.387ZM24 11.33C24 5.083 18.617 0 12 0S0 5.083 0 11.33a3.887 3.887 0 0 0 .953 2.9c1.659 1.485 3.6.5 5.615-.5A12.75 12.75 0 0 1 12 12c3.167-.1 6.189 2.757 9.054 2.983C23.121 14.946 24 13.485 24 11.33Z"/></svg>
  