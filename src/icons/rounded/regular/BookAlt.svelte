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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.2 2.163a4.992 4.992 0 0 0-4.1-1.081l-3.822.694A4 4 0 0 0 12 3.065a4 4 0 0 0-2.284-1.289L5.9 1.082A5 5 0 0 0 0 6v10.793a5 5 0 0 0 4.105 4.919l6.286 1.143a9 9 0 0 0 3.218 0l6.291-1.143a5 5 0 0 0 4.1-4.919V6a4.983 4.983 0 0 0-1.8-3.837ZM11 20.928a7.339 7.339 0 0 1-.252-.041l-6.285-1.142A3 3 0 0 1 2 16.793V6a3 3 0 0 1 3-3 3.081 3.081 0 0 1 .54.049l3.82.7A2 2 0 0 1 11 5.712Zm11-4.135a3 3 0 0 1-2.463 2.952l-6.285 1.142a7.339 7.339 0 0 1-.252.041V5.712a2 2 0 0 1 1.642-1.968l3.821-.7A3 3 0 0 1 22 6Z"/></svg>
  