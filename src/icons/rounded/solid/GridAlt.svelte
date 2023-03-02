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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 7h5v4H0zm5 6H0v4h5zm6 0H7v4h4zm0-2V7H7v4zm2 0h4V7h-4zm6 0h5V7h-5zM7 5h4V0H7zm6-5v5h4V0zm-2 24v-5H7v5zM5 0a5.006 5.006 0 0 0-5 5h5zm12 19h-4v5h4zm2 5a5.006 5.006 0 0 0 5-5h-5zM5 19H0a5.006 5.006 0 0 0 5 5zm8-6v4h4v-4zm6-8h5a5.006 5.006 0 0 0-5-5zm5 8h-5v4h5z"/></svg>
  