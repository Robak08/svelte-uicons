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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.424 21.974a4.943 4.943 0 0 1-5.176 1.874A15.857 15.857 0 0 1 .153 12.753a4.937 4.937 0 0 1 1.874-5.169 14.429 14.429 0 0 0 14.397 14.39Zm7.408-18.3L17.4 20H17A12.574 12.574 0 0 1 4 7v-.4L20.3.178a2.749 2.749 0 0 1 3.532 3.495ZM12 10a2 2 0 0 0-4 0 2 2 0 0 0 4 0Zm6.122 2.716 2.554-6.486c-4.26-1.492-6.618 4.676-2.554 6.486Z"/></svg>
  