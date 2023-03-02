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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 18c-7.929-.252-7.928-11.749 0-12 7.929.252 7.928 11.749 0 12Zm-8-6a7.977 7.977 0 0 1 2.443-5.754A1.913 1.913 0 0 0 13 4.863V1a1 1 0 0 0-2 0v4.071a6.913 6.913 0 0 0-1.6.43L7.355 1.986a1 1 0 1 0-1.728 1.006L7.669 6.5a7.08 7.08 0 0 0-1.147 1.146L3 5.6a1 1 0 0 0-1 1.726l3.512 2.046A6.94 6.94 0 0 0 5.071 11H1a1 1 0 0 0 0 2h4.071a6.95 6.95 0 0 0 .439 1.622L2 16.662a1 1 0 0 0 1.01 1.729l3.509-2.042a7.028 7.028 0 0 0 1.13 1.131L5.6 21a1 1 0 0 0 1.73 1.007l2.046-3.517a6.966 6.966 0 0 0 1.624.439V23a1 1 0 0 0 2 0v-3.863a1.913 1.913 0 0 0-.557-1.383A7.977 7.977 0 0 1 10 12Z"/></svg>
  