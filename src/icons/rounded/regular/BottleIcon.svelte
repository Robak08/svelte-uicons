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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.856 8.065 15 7.323V2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2v5.323l-1.856.742A4.976 4.976 0 0 0 4 12.708V19a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-6.292a4.977 4.977 0 0 0-3.144-4.643ZM18 19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6.292a2.984 2.984 0 0 1 1.886-2.785l2.486-.994A1 1 0 0 0 11 8V2h2v6a1 1 0 0 0 .629.929l2.485.994A2.984 2.984 0 0 1 18 12.708Zm-3-6H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-4v-2h4Z"/></svg>
  