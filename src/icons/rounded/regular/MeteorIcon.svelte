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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 24a8.971 8.971 0 0 1-6.364-2.632 9.01 9.01 0 0 1 0-12.728c2.256-2.26 7.18-5.532 9.914-7.282A2.242 2.242 0 0 1 16 3.24l4.86-2.9a2.023 2.023 0 0 1 2.533.283 2.034 2.034 0 0 1 .279 2.564L20.771 8a2.242 2.242 0 0 1 1.871 3.449c-1.748 2.734-5.019 7.655-7.278 9.915A8.971 8.971 0 0 1 9 24Zm-4.95-4.05a7.009 7.009 0 0 0 9.9 0c2.125-2.126 5.3-6.914 7.007-9.579a.229.229 0 0 0 .009-.245.232.232 0 0 0-.215-.126H19a1 1 0 0 1-.856-1.517l3.832-6.349-.028-.111-6.436 3.836A1 1 0 0 1 14 5V3.249a.241.241 0 0 0-.372-.206C10.962 4.749 6.172 7.928 4.05 10.05a7.01 7.01 0 0 0 0 9.9ZM9 19c-5.275-.138-5.273-7.863 0-8 5.275.138 5.273 7.863 0 8Zm0-6a2 2 0 0 0 0 4 2 2 0 0 0 0-4Z"/></svg>
  