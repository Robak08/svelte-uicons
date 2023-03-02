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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.5 0A2.5 2.5 0 1 0 21 2.5 2.5 2.5 0 0 0 18.5 0ZM8.707 18.474 5.685 21.5l.2.2a.99.99 0 0 0 .7.3.944.944 0 0 0 .71-.286 1 1 0 0 1 1.4 1.429A2.982 2.982 0 0 1 6.6 24h-.03a2.981 2.981 0 0 1-2.112-.9l-2.8-2.856a1 1 0 1 1 1.428-1.4l1.2 1.224 3.007-3.008a1 1 0 0 1 1.414 1.414ZM18 20a1 1 0 0 0-1 1 1 1 0 0 1-1 1v-3.155a1 1 0 0 0-.312-.725l-3.4-3.229 4.83-4.829a3 3 0 0 0-.1-4.338l-.67-.56A5.011 5.011 0 0 0 13.145 4H5a1 1 0 0 0 0 2h7.781L9 9.783a3.35 3.35 0 0 0 .062 4.8L14 19.274V22h-2a1 1 0 0 0 0 2h4a3 3 0 0 0 3-3 1 1 0 0 0-1-1Z"/></svg>
  