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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.5 10.57c.316.665.5 1.392.5 2.137v6.292c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6.292c0-.746.184-1.472.5-2.137l7.965 7.966c1.862 1.939 5.21 1.94 7.071 0l7.965-7.966ZM21 4v6.242l-6.879 6.879c-1.133 1.133-3.109 1.133-4.243 0L3 10.243V4c0-2.206 1.794-4 4-4h10c2.206 0 4 1.794 4 4Zm-5 6c0-1.36-.974-2.51-2.315-2.733l-3.042-.507c-1.086-.211-.64-1.825.356-1.76h2.268c.356 0 .688.192.867.5a.999.999 0 1 0 1.731-1.001 3.011 3.011 0 0 0-2.598-1.5h-.268c-.006-1.308-1.994-1.307-2 0-3.435-.019-4.184 5.084-.685 5.733l3.042.507c1.086.211.64 1.825-.356 1.76h-2.268c-.356 0-.688-.192-.867-.5a.998.998 0 0 0-1.366-.365c-1.533 1.221.913 2.989 2.233 2.865H11c.006 1.308 1.994 1.307 2 0 1.654 0 3-1.346 3-3Z"/></svg>
  