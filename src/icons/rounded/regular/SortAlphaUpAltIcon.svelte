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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 2h3.84s-4.521 5.065-4.552 5.114A1.884 1.884 0 0 0 16.887 10h4.112a1 1 0 1 0 0-2h-3.84s4.521-5.065 4.552-5.114A1.884 1.884 0 0 0 20.112 0H16a1 1 0 1 0 0 2Zm6 15.5V23a1 1 0 1 1-2 0v-2h-3v2a1 1 0 1 1-2 0v-5.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5ZM20 19v-1.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5V19h3ZM11.707 6.293a.999.999 0 0 0 0-1.414L7.414.586C7.024.196 6.512 0 6 0S4.976.195 4.586.585L.293 4.879a.999.999 0 1 0 1.414 1.414L5 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z"/></svg>
  